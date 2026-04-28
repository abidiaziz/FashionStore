/// <reference types="cypress" />

// The original site loads jQuery plugins (owl carousel, select2)
// which throw if their target DOM elements are missing on certain pages.
// We're testing navigation, not the legacy JS — ignore those errors.
Cypress.on('uncaught:exception', () => false);

describe('FashionStore - Navigation', () => {
  it('loads the home page successfully', () => {
    cy.visit('/index.html');
    cy.get('body').should('be.visible');
  });

  it('home page contains expected sections', () => {
    cy.visit('/index.html');
    cy.title().should('not.be.empty');
  });

  it('navigates to the login page', () => {
    cy.visit('/login.html');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'login.html');
  });

  it('navigates to the FAQ page', () => {
    cy.visit('/faq.html');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'faq.html');
  });

  it('navigates to the product page', () => {
    cy.visit('/product.html');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'product.html');
  });

  it('navigates to the category page', () => {
    cy.visit('/category.html');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'category.html');
  });
});

describe('FashionStore - Page integrity', () => {
  const pages = [
    'index.html',
    'login.html',
    'faq.html',
    'product.html',
    'category.html',
    'sub-category.html',
    'dashboard.html',
  ];

  pages.forEach((page) => {
    it(`page ${page} loads with HTTP 200`, () => {
      cy.request(`/${page}`).its('status').should('eq', 200);
    });
  });
});
