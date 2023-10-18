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
  })
})

