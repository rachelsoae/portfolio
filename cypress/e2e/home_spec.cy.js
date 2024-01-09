describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('displays expected page elements', () => {
    cy.title().should('eq', 'SoaeSpace');
    cy.get('h1').contains('Software Engineer & Web Developer');
    cy.get('p').contains('Building technology that builds community. Let’s create something meaningful together.');
    cy.get('button').contains('Contact Me');
    cy.get('button').contains('View My Work');
    cy.get('#philomena').should('be.visible');
  })

  it('should use CTAs to navigate to correct pages', () => {
    cy.get('button').contains('Contact Me').click();
    cy.url().should('eq', 'http://localhost:3000/contact');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('button').contains('View My Work').click();
    cy.url().should('eq', 'http://localhost:3000/portfolio');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
  })
})