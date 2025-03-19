describe('OrangeHRM', () => {

  beforeEach(() => {
    cy.login()
  })

  context('Side Menu', () => {

    it('Validate that the post-login screen is the Dashboard', () => {
      cy.get('h6')
        .should('contain', 'Dashboard')
    })

    it('Test if the side menu is responsive', () => {
      cy.get('.oxd-main-menu')
        .contains('Span', 'Admin')
        .click()
      cy.get('.active')
        .contains('Span', 'Admin')
        .should('be.visible')
    });
  });
})