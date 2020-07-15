// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('enterPlayers', (player1, player2) => {
  cy.visit('/')
    .get('input')
    .type('player1')
    .type('{enter}')
    .type('player2')
    .type('{enter}');
});

Cypress.Commands.add('play', winnerComb => {
  cy.get('.square').each((square, index) => {
    if (winnerComb.includes(index)) {
      square.click();
    }
  });
});

Cypress.Commands.add('checkStatus', status => {
  cy.get('.status').contains(status);
});
