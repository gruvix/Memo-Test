context('MemoTest', () => {
  
  before(() => {
    cy.visit('/')
  })


  describe('visits page and checks title', () => {
    it('The title is "MemoTest"', () => {
      cy.get('h1').contains('MemoTest')
    })
  })

  describe('plays the game', () => {
    const CARDS_TOTAL_LENGHT = 12
    it('finishes de game', () => {
      cy.get('#start').click()
      cy.get('#game').should('be.visible')
      cy.get('.card').should('have.length', CARDS_TOTAL_LENGHT)
    })
  })

})
