const loginHelper = require("../../helpers/loginHelper.cy");
it('Enter "Hello, its an automated test" ', () => {
    loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));

    cy.get('.Chat_iconBox__3d1NM')
        .should('be.visible').click();

    cy.get('[rows="1"]').type('Hello, its an automated test')
        .should('be.visible')

    cy.get('.Chat_textInput__2Sr4M > button > img')
        .should('be.visible').click();
})
it('Reply to this message', () => {
    loginHelper.login();

    cy.get('.Chat_iconBox__3d1NM')
        .should('be.visible').click();

    cy.get(':nth-child(29) > .Chat_message__BInaT > .Chat_infoWrapper__2pQ7T > button').click();

    cy.get('[rows="1"]').type('Automatic reply to your message :)')
        .should('be.visible');

    cy.get('.Chat_textInput__2Sr4M > button > img')
        .should('be.visible').click();
})