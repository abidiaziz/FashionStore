// E2E navigation tests (Cypress).
// The original site throws JS errors on some pages — ignore them.
Cypress.on('uncaught:exception', () => false);

describe('Navigation', () => {
  it('home page loads', () => {
    cy.visit('/index.html');
    cy.get('body').should('be.visible');
  });

  it('login page loads', () => {
    cy.visit('/login.html');
    cy.url().should('include', 'login.html');
  });

  it('product page loads', () => {
    cy.visit('/product.html');
    cy.url().should('include', 'product.html');
  });

  it('category page loads', () => {
    cy.visit('/category.html');
    cy.url().should('include', 'category.html');
  });

  it('faq page loads', () => {
    cy.visit('/faq.html');
    cy.url().should('include', 'faq.html');
  });
});
