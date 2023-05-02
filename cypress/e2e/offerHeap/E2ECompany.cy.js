const loginHelperOfferHeap = require('../../helpers/offerHeap/loginHelperOfferHeap.cy')
describe('E2E testing', () => {

    it('Enter login and password', () => {
        loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

        cy.get('.sc-dIfARi')
            .should('be.visible')
            .click();

        cy.contains("General Info")
            .should('be.visible');

        cy.get(':nth-child(5) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("Draft").as('Selected')
            .click();

        cy.get('@Selected')
            .should('be.visible');
    })
});