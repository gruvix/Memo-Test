context('MemoTest', () => {
  
  describe('plays the game', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('finds the title is "MemoTest"', () => {
      cy.get('h1').contains('MemoTest')
    });

    it('starts the game', () => {
      cy.get('#start').click()
    });

    const CARDS_TOTAL_LENGHT = 12
    it('has 12 cards', () => {
      cy.get('.card').should('have.length', CARDS_TOTAL_LENGHT)
    });

    it('shows the game container', () => {
      cy.get("#start").click().get('#game').should('be.visible')
    });

    it('shows a card', () => {
      cy.get('#start').click().get('.card').first().click().should('be.visible')
    })
function getCardsPairs(cards) {
  const pairs = {};
  cards.each((index, card) => {
    const colorClass = card.className.replace('card h-100', '');

    if(pairs[colorClass]) {
      pairs[colorClass].push(card);
    } else { 
      pairs[colorClass] = [card];
    }
  });
  return pairs;
}

