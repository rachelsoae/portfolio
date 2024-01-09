describe('navigation menus', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('should display all nav buttons on a large screen', () => {
    cy.viewport('macbook-15');
    cy.get('#logo');
    cy.get('.top-nav__buttons').children()
      .first().should('have.text', 'Home')
      .next().should('have.text', 'About')
      .next().should('have.text', 'Portfolio')
      .next().should('have.text', 'Contact Me');
  })

  it('should navigate to the correct pages on a large screen', () => {
    cy.viewport('macbook-15');
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

  it('should be able to use hamburger menu on a small screen', () => {
    cy.viewport('iphone-3');
    cy.get('#logo');
    cy.get('#menu__open').click();
    cy.get('.top-nav__buttons').children()
      .first().should('have.text', 'Home')
      .next().should('have.text', 'About')
      .next().should('have.text', 'Portfolio')
      .next().should('have.text', 'Contact');
  })

  it('should navigate to the correct pages on a large screen', () => {
    cy.viewport('iphone-3');
    cy.get('#menu__open').click();
    cy.get('nav a').contains('About').click()
      .url().should('eq', 'http://localhost:3000/about');
    cy.get('#menu__open').click();
    cy.get('nav a').contains('Portfolio').click()
      .url().should('eq', 'http://localhost:3000/portfolio');
    cy.get('#menu__open').click();
    cy.get('nav a').contains('Contact').click()
      .url().should('eq', 'http://localhost:3000/contact');
    cy.get('#menu__open').click();
    cy.get('nav a').contains('Home').click()
      .url().should('eq', 'http://localhost:3000/');
  })
})