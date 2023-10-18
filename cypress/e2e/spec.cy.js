describe('visits page and checks title', () => {
  it('The title is "MemoTest"', () => {
    cy.visit('/')
    cy.get('h1').contains('MemoTest')
  })
})

describe('plays the game', () => {
  const CARDS_LENGHT = 12
  it('finishes de game', () => {
    cy.visit('/')
    cy.get('#start').click()
    cy.get('#game').should('be.visible')
    cy.get('.card').should('have.length', CARDS_LENGHT)
  })
})

