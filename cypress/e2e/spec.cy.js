describe('visits page and checks title', () => {
  it('The title is "MemoTest"', () => {
    cy.visit('/')
    cy.get('h1').contains('MemoTest')
  })
})
