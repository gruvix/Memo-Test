describe('visits page', () => {
  it('finds the page', () => {
    cy.visit('http://localhost:8080')
    cy.get('h1').contains('MemoTest')
  })
})
