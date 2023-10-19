context('MemoTest', () => {
  


  describe('plays the game', () => {
    // it('starts the game', () => {
    //   cy.get('#start').click()
    // })

    // it('has 12 cards', () => {
    //   cy.get('.card').should('have.length', CARDS_TOTAL_LENGHT)
    // })
    // it('shows the game container', () => {
    //   cy.get('#game').should('be.visible')
    // })
    beforeEach(() => {
      cy.visit('/')
    });

    it('finds the title is "MemoTest"', () => {
      cy.get('h1').contains('MemoTest')
    });


  })
})
