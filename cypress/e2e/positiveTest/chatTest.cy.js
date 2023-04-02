const loginHelper = require("../../helpers/loginHelper.cy");
describe('Login test', () => {

    it('Enter "Hello, its an automated test" ', () => {
        loginHelper.login();

        cy.get('.Chat_iconBox__3d1NM')
            .should('be.visible').click();

        cy.get('[rows="1"]').type('Hello, its an automated test')
            .should('be.visible')

        cy.get('.Chat_textInput__2Sr4M > button > img')
            .should('be.visible').click();
    })
})