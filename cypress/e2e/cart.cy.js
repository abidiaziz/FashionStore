/// <reference types="cypress" />

// The legacy site's jQuery plugins throw on some pages — ignore those errors.
Cypress.on('uncaught:exception', () => false);

describe('FashionStore - Functional cart', () => {
  beforeEach(() => {
    // Clear any cart leftovers from previous tests
    cy.window().then((win) => win.localStorage.removeItem('fashionstore-cart'));
  });

  it('cart drawer is empty by default on the category page', () => {
    cy.visit('/category.html');
    cy.get('#cart-menu .car-mid').should('contain.text', 'empty');
    cy.get('.cart-header span').contains(/Your\s*Selection\s*\(0\)/);
  });

  it('clicking Add to Cart adds an item and opens the drawer', () => {
    cy.visit('/category.html');
    cy.get('.add-to-cart').first().click({ force: true });
    cy.get('.cart-header span').contains(/Your\s*Selection\s*\(1\)/);
    cy.get('#cart-menu .cart-item').should('have.length', 1);
  });

  it('clicking Add to Cart twice merges the same product (qty=2)', () => {
    cy.visit('/category.html');
    cy.get('.add-to-cart').first().click({ force: true });
    cy.get('.add-to-cart').first().click({ force: true });
    cy.get('#cart-menu .cart-item').should('have.length', 1);
    cy.get('#cart-menu .cart-item .value').should('contain.text', '2');
    cy.get('.cart-header span').contains(/Your\s*Selection\s*\(2\)/);
  });

  it('subtotal updates with the cart contents', () => {
    cy.visit('/category.html');
    cy.get('.add-to-cart').first().click({ force: true });
    cy.get('.totalAmount .float-right').invoke('text').should('match', /€\s*\d/);
  });

  it('cart persists across page reloads (localStorage)', () => {
    cy.visit('/category.html');
    cy.get('.add-to-cart').first().click({ force: true });
    cy.reload();
    cy.get('#cart-menu .cart-item').should('have.length', 1);
  });
});
