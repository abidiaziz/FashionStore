/**
 * Cart module - testable cart logic for FashionStore.
 * Pure functions, no DOM access, so Jest can unit-test them.
 */

function createCart() {
  return { items: [] };
}

function addItem(cart, product, quantity = 1) {
  if (!product || typeof product.id === 'undefined') {
    throw new Error('Product must have an id');
  }
  if (typeof product.price !== 'number' || product.price < 0) {
    throw new Error('Product must have a non-negative numeric price');
  }
  if (quantity <= 0) {
    throw new Error('Quantity must be > 0');
  }

  const existing = cart.items.find((i) => i.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({
      id: product.id,
      name: product.name || '',
      price: product.price,
      quantity,
    });
  }
  return cart;
}

function removeItem(cart, productId) {
  cart.items = cart.items.filter((i) => i.id !== productId);
  return cart;
}

function updateQuantity(cart, productId, quantity) {
  const item = cart.items.find((i) => i.id === productId);
  if (!item) return cart;
  if (quantity <= 0) {
    return removeItem(cart, productId);
  }
  item.quantity = quantity;
  return cart;
}

function getSubtotal(cart) {
  return cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function applyDiscount(subtotal, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  return subtotal * (1 - discountPercent / 100);
}

function getTotal(cart, discountPercent = 0) {
  const subtotal = getSubtotal(cart);
  return applyDiscount(subtotal, discountPercent);
}

function getItemCount(cart) {
  return cart.items.reduce((sum, i) => sum + i.quantity, 0);
}

function clearCart(cart) {
  cart.items = [];
  return cart;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createCart,
    addItem,
    removeItem,
    updateQuantity,
    getSubtotal,
    applyDiscount,
    getTotal,
    getItemCount,
    clearCart,
  };
}
