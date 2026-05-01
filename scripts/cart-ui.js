/**
 * Cart UI bridge.
 * Connects scripts/cart.js (pure cart logic) to the DOM:
 *   - intercepts clicks on .add-to-cart buttons
 *   - persists cart in localStorage
 *   - re-renders the cart drawer (#cart-menu) on every change
 *
 * This file does NOT modify any existing site script — it only listens
 * to events and rewrites the cart drawer's contents.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'fashionstore-cart';

  // Override the legacy global so onclick="addToCart()" doesn't throw.
  // The real work is done by event delegation below.
  window.addToCart = function () { /* handled by event delegation */ };

  // -------------------------------------------------------------------------
  // State (uses functions from cart.js loaded globally before this file)
  // -------------------------------------------------------------------------
  var cart = (typeof createCart === 'function') ? createCart() : { items: [] };
  loadFromStorage();

  function loadFromStorage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.items)) {
          cart.items = parsed.items;
        }
      }
    } catch (_ignored) { /* ignore */ }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (_ignored) { /* ignore */ }
  }

  // -------------------------------------------------------------------------
  // Read product info from a card in the page
  // -------------------------------------------------------------------------
  function parsePrice(text) {
    if (!text) return 0;
    // Format examples: "€ 6.500,00", "$ 250.00", "€500"
    var cleaned = text.replace(/[^\d.,]/g, '');
    if (cleaned.indexOf(',') > -1 && cleaned.indexOf('.') > -1) {
      // European: "6.500,00" -> "6500.00"
      cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    } else if (cleaned.indexOf(',') > -1) {
      cleaned = cleaned.replace(',', '.');
    }
    var n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }

  function extractProduct(button) {
    // Walk up the DOM to find the product container
    var card = button.closest('.prod') ||
               button.closest('.product-detail') ||
               button.closest('.image-container') ||
               button.parentElement;
    if (!card) return null;

    var titleEl = card.querySelector('.product-title') ||
                  card.querySelector('.prod-title') ||
                  card.querySelector('h2, h3, h4');
    var priceEl = card.querySelector('.product-price') ||
                  card.querySelector('.prod-price') ||
                  card.querySelector('.price');
    var imgEl   = card.querySelector('img');

    var name  = titleEl ? titleEl.textContent.trim().replace(/\s+/g, ' ') : 'Product';
    var price = priceEl ? parsePrice(priceEl.textContent) : 0;
    var image = imgEl   ? imgEl.getAttribute('src') : '';

    // Stable id: position of the button in the page
    var allButtons = Array.prototype.slice.call(
      document.querySelectorAll('.add-to-cart')
    );
    var id = allButtons.indexOf(button) + 1;
    if (id <= 0) id = Date.now(); // fallback

    return { id: id, name: name, price: price, image: image };
  }

  // -------------------------------------------------------------------------
  // Render the cart drawer
  // -------------------------------------------------------------------------
  function renderCart() {
    // Header count
    document.querySelectorAll('.cart-header span').forEach(function (s) {
      if (/Your\s*Selection/i.test(s.textContent)) {
        s.textContent = 'Your Selection (' + getItemCount(cart) + ')';
      }
    });

    // Items list
    var carMid = document.querySelector('#cart-menu .car-mid');
    if (carMid) {
      if (cart.items.length === 0) {
        carMid.innerHTML =
          '<div style="text-align:center;padding:30px;color:#999;">' +
          'Your cart is empty</div>';
      } else {
        carMid.innerHTML = cart.items.map(function (item) {
          return (
            '<div class="cart-item" data-cart-id="' + item.id + '">' +
              (item.image ? '<img src="' + item.image + '" alt="">' : '') +
              '<div class="cart-item-detail">' +
                '<div class="item-header">' +
                  '<span>' + escapeHtml(item.name) + '</span>' +
                  '<button type="button" data-cart-action="remove" data-cart-id="' + item.id + '">' +
                    '<i class="fa fa-trash"></i>' +
                  '</button>' +
                '</div>' +
                '<div class="item-footer">' +
                  '<div class="counter-container">' +
                    '<button class="button" data-cart-action="dec" data-cart-id="' + item.id + '">' +
                      '<i class="fa fa-minus"></i></button>' +
                    '<div class="value">' + item.quantity + '</div>' +
                    '<button class="button" data-cart-action="inc" data-cart-id="' + item.id + '">' +
                      '<i class="fa fa-plus"></i></button>' +
                  '</div>' +
                  '<span class="item-price">€ ' + item.price.toFixed(2) + '</span>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        }).join('');
      }
    }

    // Subtotal
    document.querySelectorAll('.totalAmount .float-right').forEach(function (s) {
      s.textContent = '€ ' + getSubtotal(cart).toFixed(2);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function openDrawer() {
    var menu = document.getElementById('cart-menu');
    if (menu) menu.style.right = '0';
  }

  // -------------------------------------------------------------------------
  // Click delegation
  // -------------------------------------------------------------------------
  document.addEventListener('click', function (e) {
    // Add to cart
    var addBtn = e.target.closest && e.target.closest('.add-to-cart');
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      var product = extractProduct(addBtn);
      if (product && typeof addItem === 'function') {
        try {
          addItem(cart, product, 1);
          saveToStorage();
          renderCart();
          openDrawer();
        } catch (err) {
          console.error('Cart error:', err);
        }
      }
      return;
    }

    // Cart drawer actions (remove / increment / decrement)
    var actionBtn = e.target.closest && e.target.closest('[data-cart-action]');
    if (actionBtn) {
      e.preventDefault();
      var action = actionBtn.getAttribute('data-cart-action');
      var id = parseInt(actionBtn.getAttribute('data-cart-id'), 10);
      var item = cart.items.find(function (i) { return i.id === id; });
      if (!item) return;

      if (action === 'remove') {
        removeItem(cart, id);
      } else if (action === 'inc') {
        updateQuantity(cart, id, item.quantity + 1);
      } else if (action === 'dec') {
        updateQuantity(cart, id, item.quantity - 1);
      }
      saveToStorage();
      renderCart();
    }
  });

  // -------------------------------------------------------------------------
  // Initial render once the page is ready
  // -------------------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCart);
  } else {
    renderCart();
  }
})();
