// Unit tests for the cart functions (Jest).
const cart = require('../scripts/cart');

describe('Cart basics', () => {
  test('createCart returns an empty cart', () => {
    expect(cart.createCart().items).toEqual([]);
  });

  test('addItem adds a new product', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, name: 'T-shirt', price: 25 }, 2);
    expect(c.items.length).toBe(1);
    expect(c.items[0].quantity).toBe(2);
  });

  test('addItem twice merges the same product', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 10 }, 1);
    cart.addItem(c, { id: 1, price: 10 }, 2);
    expect(c.items.length).toBe(1);
    expect(c.items[0].quantity).toBe(3);
  });

  test('removeItem deletes a product', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 10 }, 1);
    cart.addItem(c, { id: 2, price: 20 }, 1);
    cart.removeItem(c, 1);
    expect(c.items.length).toBe(1);
    expect(c.items[0].id).toBe(2);
  });

  test('clearCart empties the cart', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 10 }, 1);
    cart.clearCart(c);
    expect(c.items.length).toBe(0);
  });
});

describe('Cart prices', () => {
  test('getSubtotal sums price * quantity', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 10 }, 2); // 20
    cart.addItem(c, { id: 2, price: 30 }, 1); // 30
    expect(cart.getSubtotal(c)).toBe(50);
  });

  test('applyDiscount reduces price by percent', () => {
    expect(cart.applyDiscount(100, 20)).toBe(80);
  });

  test('getTotal applies discount on subtotal', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 50 }, 2); // 100
    expect(cart.getTotal(c, 10)).toBe(90);
  });

  test('getItemCount returns total number of items', () => {
    const c = cart.createCart();
    cart.addItem(c, { id: 1, price: 10 }, 3);
    cart.addItem(c, { id: 2, price: 20 }, 2);
    expect(cart.getItemCount(c)).toBe(5);
  });
});
