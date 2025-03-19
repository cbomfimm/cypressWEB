describe('template spec', () => {
  beforeEach(() => {
    cy.login()
  })
  it('passes', () => {
    cy.get('h6').should('contain', 'Dashboard')
  })
})