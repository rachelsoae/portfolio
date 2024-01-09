describe('navigation menus', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport('macbook-15');
  })
  
  it('should display all nav buttons in a large window', () => {
    // cy.visit('http://localhost:3000');
    // cy.viewport('macbook-15');
    cy.get('#logo');
    cy.get('.top-nav__buttons').children()
      .first().should('have.text', 'Home')
      .next().should('have.text', 'About')
      .next().should('have.text', 'Portfolio')
      .next().should('have.text', 'Contact Me');
  })

  it('should navigate to the correct pages', () => {
    // cy.visit('http://localhost:3000');
    // cy.viewport('macbook-15');
    cy.get('nav a').contains('About').click()
      .url().should('eq', 'http://localhost:3000/about');
      cy.get('#logo').click()
      .url().should('eq', 'http://localhost:3000/');
    cy.get('nav a').contains('Portfolio').click()
      .url().should('eq', 'http://localhost:3000/portfolio');
    cy.get('nav a').contains('Home').click()
      .url().should('eq', 'http://localhost:3000/');
    cy.get('nav a').contains('Contact Me').click()
      .url().should('eq', 'http://localhost:3000/contact');
  })
})