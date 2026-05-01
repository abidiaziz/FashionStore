// Cart functions for FashionStore.
// Pure functions (no DOM) so we can test them with Jest.

function createCart() {
  return { items: [] };
}

function addItem(cart, product, quantity) {
  if (!quantity) quantity = 1;

  // If the product is already in the cart, just add to its quantity
  const existing = cart.items.find(function (i) { return i.id === product.id; });
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({
      id: product.id,
      name: product.name || '',
      price: product.price,
      quantity: quantity
    });
  }
  return cart;
}

function removeItem(cart, productId) {
  cart.items = cart.items.filter(function (i) { return i.id !== productId; });
  return cart;
}

function updateQuantity(cart, productId, quantity) {
  const item = cart.items.find(function (i) { return i.id === productId; });
  if (!item) return cart;
  if (quantity <= 0) return removeItem(cart, productId);
  item.quantity = quantity;
  return cart;
}

function getSubtotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].price * cart.items[i].quantity;
  }
  return total;
}

function applyDiscount(subtotal, percent) {
  return subtotal * (1 - percent / 100);
}

function getTotal(cart, percent) {
  if (!percent) percent = 0;
  return applyDiscount(getSubtotal(cart), percent);
}

function getItemCount(cart) {
  let count = 0;
  for (let i = 0; i < cart.items.length; i++) {
    count += cart.items[i].quantity;
  }
  return count;
}

function clearCart(cart) {
  cart.items = [];
  return cart;
}

// Allow Jest (Node.js) to import these functions.
// In the browser this block is skipped.
if (typeof module !== 'undefined') {
  module.exports = {
    createCart: createCart,
    addItem: addItem,
    removeItem: removeItem,
    updateQuantity: updateQuantity,
    getSubtotal: getSubtotal,
    applyDiscount: applyDiscount,
    getTotal: getTotal,
    getItemCount: getItemCount,
    clearCart: clearCart
  };
}
