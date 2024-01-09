describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('should show all elements on page load', () => {
    cy.visit('https://example.cypress.io')
  })
})