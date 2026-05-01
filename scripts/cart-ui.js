// Connect cart.js to the website (the cart drawer #cart-menu).
// Saves the cart in localStorage so it lives across pages.

// Override the legacy onclick="addToCart()" so it doesn't error.
window.addToCart = function () {};

// Build the cart and load saved data
let cart = createCart();
const saved = localStorage.getItem('cart');
if (saved) {
  cart.items = JSON.parse(saved);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart.items));
}

// Read product info from the card around the clicked button
function readProduct(button) {
  const card = button.closest('.prod') || button.closest('.product-detail');
  if (!card) return null;

  const titleEl = card.querySelector('.product-title');
  const priceEl = card.querySelector('.product-price');

  const name = titleEl ? titleEl.textContent.trim() : 'Product';
  const priceText = priceEl ? priceEl.textContent : '0';
  // "€ 6.500,00" -> 6500
  const price = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

  // Use the button's position in the page as a stable id
  const buttons = Array.from(document.querySelectorAll('.add-to-cart'));
  const id = buttons.indexOf(button) + 1;

  return { id, name, price };
}

// Redraw the cart drawer
function renderCart() {
  // Header counter
  document.querySelectorAll('.cart-header span').forEach(s => {
    if (s.textContent.includes('Your Selection')) {
      s.textContent = `Your Selection (${getItemCount(cart)})`;
    }
  });

  // Items list
  const list = document.querySelector('#cart-menu .car-mid');
  if (list) {
    if (cart.items.length === 0) {
      list.innerHTML = '<div style="text-align:center;padding:30px;">Your cart is empty</div>';
    } else {
      list.innerHTML = cart.items.map(item => `
        <div class="cart-item">
          <div class="cart-item-detail">
            <div class="item-header">
              <span>${item.name}</span>
              <button data-action="remove" data-id="${item.id}"><i class="fa fa-trash"></i></button>
            </div>
            <div class="item-footer">
              <div class="counter-container">
                <button data-action="dec" data-id="${item.id}"><i class="fa fa-minus"></i></button>
                <div class="value">${item.quantity}</div>
                <button data-action="inc" data-id="${item.id}"><i class="fa fa-plus"></i></button>
              </div>
              <span class="item-price">€ ${item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Subtotal
  document.querySelectorAll('.totalAmount .float-right').forEach(s => {
    s.textContent = `€ ${getSubtotal(cart).toFixed(2)}`;
  });
}

// Listen for clicks on the page
document.addEventListener('click', e => {

  // Add to cart button
  const addBtn = e.target.closest('.add-to-cart');
  if (addBtn) {
    e.preventDefault();
    const product = readProduct(addBtn);
    if (product) {
      addItem(cart, product, 1);
      saveCart();
      renderCart();
      const menu = document.getElementById('cart-menu');
      if (menu) menu.style.right = '0';
    }
    return;
  }

  // Drawer buttons (remove / + / -)
  const action = e.target.closest('[data-action]');
  if (action) {
    const type = action.getAttribute('data-action');
    const id = parseInt(action.getAttribute('data-id'));
    const item = cart.items.find(i => i.id === id);
    if (!item) return;

    if (type === 'remove') removeItem(cart, id);
    if (type === 'inc') updateQuantity(cart, id, item.quantity + 1);
    if (type === 'dec') updateQuantity(cart, id, item.quantity - 1);

    saveCart();
    renderCart();
  }
});

// First render
renderCart();
