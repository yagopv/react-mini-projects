describe('Tick Tack Toe Game', () => {
  beforeEach(() => {
    cy.enterPlayers('player1', 'player2');
  });

  it('should allow enter 2 players', () => {
    cy.get('.status').contains('Next player: player1 (X)');
  });

  it('should allow gaming to tick tack toe', () => {
    cy.checkStatus('Next player: player1 (X)')
      .play([0, 1, 4, 5, 8])
      .checkStatus('Winner: player1');
  });

  it('should show an scoreboard after the game finish', () => {
    cy.play([0, 1, 4, 5, 8])
      .get('.scoreboard > button')
      .contains('Close Scoreboard');
  });
});
