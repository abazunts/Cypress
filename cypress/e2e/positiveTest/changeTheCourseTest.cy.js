const loginHelper = require("../../helpers/loginHelper.cy");
describe('Change of course on the course registration page', () => {
    it('Sign in', () => {

        loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));

        cy.get('.course-choice-page_courseBlock__9yabz > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click()

        cy.contains('button', "Выбрать")
            .should('be.visible').click({multiple: true})


        cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
            .should('be.visible').click({multiple: true})

    })
})