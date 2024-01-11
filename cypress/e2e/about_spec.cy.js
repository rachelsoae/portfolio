describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  })
  
  it('should show all elements on page load', () => {
    cy.get('h1').should('have.text', 'About');
    cy.get('.about__image').should('be.visible');
    cy.get('.about__text').children()
      .first().should('have.text', 'Hello! 👋 My name is Rachel Soae Prather. I\'m a Korean-American Software Engineer and Web Developer located outside Portland, Oregon.')
      .next().should('have.text', 'My mission is to Build Technology that Builds Community. In service of that mission, I work and volunteer with ethical organizations whose missions I strongly believe in. I am currently associated with Rita XYZ, Lesbians Who Tech & Allies, Out In Tech, Girls Who Code, and PDXWIT.')
      .next().should('have.text', 'In my downtime, I can be found eating kimchi, searching for the best honey at the farmer\'s market, and making music with friends.')
      .next().should('have.text', 'I would love to connect with you. Let\'s create something meaningful together.');
  })

  it('should navigate to contact page when link is clicked', () => {
    cy.get('#contact-link').click();
    cy.url().should('eq', 'http://localhost:3000/contact');
  })
})