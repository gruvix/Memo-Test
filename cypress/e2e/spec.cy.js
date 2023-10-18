describe('visits page and checks title', () => {
  it('The title is "MemoTest"', () => {
    cy.visit('/')
    cy.get('h1').contains('MemoTest')
  })
})

describe('tests the game', () => {
  it('finishes de game', () => {
    cy.visit('/')
    cy.get('#start').click()
    cy.get('#game').should('be.visible')
    cy.get('.card').should('have.length', 16)
  })
})

