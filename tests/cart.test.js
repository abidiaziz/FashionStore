const {
  createCart,
  addItem,
  removeItem,
  updateQuantity,
  getSubtotal,
  applyDiscount,
  getTotal,
  getItemCount,
  clearCart,
} = require('../scripts/cart');

describe('Cart - basic operations', () => {
  test('createCart returns an empty cart', () => {
    const cart = createCart();
    expect(cart.items).toEqual([]);
  });

  test('addItem adds a new product to the cart', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 2);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(2);
  });

  test('addItem merges duplicate products by id', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 1);
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 3);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(4);
  });

  test('removeItem deletes a product from the cart', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 1);
    addItem(cart, { id: 2, name: 'Jeans', price: 60 }, 1);
    removeItem(cart, 1);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].id).toBe(2);
  });

  test('updateQuantity changes quantity for an existing item', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 1);
    updateQuantity(cart, 1, 5);
    expect(cart.items[0].quantity).toBe(5);
  });

  test('updateQuantity to 0 removes the item', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 1);
    updateQuantity(cart, 1, 0);
    expect(cart.items).toHaveLength(0);
  });

  test('clearCart empties the cart', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 1);
    addItem(cart, { id: 2, name: 'Jeans', price: 60 }, 1);
    clearCart(cart);
    expect(cart.items).toHaveLength(0);
  });
});

describe('Cart - price calculation', () => {
  test('getSubtotal sums price * quantity for all items', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 2);
    addItem(cart, { id: 2, name: 'Jeans', price: 60 }, 1);
    expect(getSubtotal(cart)).toBe(110);
  });

  test('getSubtotal of empty cart is 0', () => {
    expect(getSubtotal(createCart())).toBe(0);
  });

  test('applyDiscount reduces price by given percentage', () => {
    expect(applyDiscount(100, 20)).toBe(80);
    expect(applyDiscount(50, 0)).toBe(50);
    expect(applyDiscount(200, 50)).toBe(100);
  });

  test('applyDiscount throws if percentage out of range', () => {
    expect(() => applyDiscount(100, -5)).toThrow();
    expect(() => applyDiscount(100, 150)).toThrow();
  });

  test('getTotal applies discount on subtotal', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 4); // 100
    expect(getTotal(cart, 10)).toBe(90);
  });

  test('getItemCount returns total number of items', () => {
    const cart = createCart();
    addItem(cart, { id: 1, name: 'T-shirt', price: 25 }, 2);
    addItem(cart, { id: 2, name: 'Jeans', price: 60 }, 3);
    expect(getItemCount(cart)).toBe(5);
  });
});

describe('Cart - validation', () => {
  test('addItem throws on invalid product (missing id)', () => {
    const cart = createCart();
    expect(() => addItem(cart, { price: 10 }, 1)).toThrow();
  });

  test('addItem throws on invalid price', () => {
    const cart = createCart();
    expect(() => addItem(cart, { id: 1, price: -5 }, 1)).toThrow();
  });

  test('addItem throws on invalid quantity', () => {
    const cart = createCart();
    expect(() => addItem(cart, { id: 1, price: 10 }, 0)).toThrow();
  });
});
