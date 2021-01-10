describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('has correct h1', () => {
    cy.get('h1').contains('Hi! I\'m Martin');
  });

  it('has career section', () => {
    cy.get('h2').contains('Career');
  });
});
