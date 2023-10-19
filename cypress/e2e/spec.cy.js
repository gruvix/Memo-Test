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
    });

    describe('Solve the game', () => {
      let pairsMap, pairsList;
      it('clicks 2 different cards and they dont disappear', () => {
        cy.get('#start').click().get('.card').then($cards => {
          pairsMap = getCardsPairs($cards)
          pairsList = Object.values(pairsMap)
          pairsList[0][0].click();
          pairsList[1][0].click();
          cy.get(pairsList[0][0]).should('be.visible')
          cy.get(pairsList[1][0]).should('be.visible')
        });
      });

      it('clicks 2 matching cards and they disappear', () => {
        cy.get('#start').click().get('.card').then($cards => {
          pairsMap = getCardsPairs($cards)
          pairsList = Object.values(pairsMap)
          pairsList[0][0].click();
          pairsList[0][1].click();
          cy.get(pairsList[0][0]).should('not.be.visible')
        });
      });

      it('clicks all matching cards in order and they disappear', () => {
        cy.get('#start').click().get('.card').then($cards => {
          pairsMap = getCardsPairs($cards)
          pairsList = Object.values(pairsMap)
          for(let i = 0; i < pairsList.length; i++){
            pairsList[i][0].click();
            pairsList[i][1].click();
          }
          cy.get('.card').should('have.length', 0)
        });
      });
    });
  });
});
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

