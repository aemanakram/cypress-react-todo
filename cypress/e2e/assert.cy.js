it ( 'Assertion button', () =>
{
    cy.visit('http://localhost:3000')
  cy.get("form > .btn").should('contain','Submit')

})      