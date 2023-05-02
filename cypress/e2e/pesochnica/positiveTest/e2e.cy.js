const loginHelper = require('../../../helpers/posochnica/loginHelper.cy');
const checkboxHelper = require('../../../helpers/posochnica/checkboxHelper.cy');

describe('E2E Testing', () => {

    it('E2E test', () => {
        loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));

        checkboxHelper.checkBox();

        ////////// ввода никнеймов, привязка телеги и выбор курса
        cy.contains("Обучение в It-Incubator").should('be.visible');

        cy.get(':nth-child(2) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible');

        cy.get(':nth-child(3) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible');

        /// кнопка проверить
        cy.get('button[type="submit"]')
            .should('be.visible').click();

        // cy.contains("Привязать")
        //     .should('be.visible').click()


        /// кнопка выбрать курс
        cy.get('.info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click();

        cy.get(':nth-child(1) > .course-choice-page_third__3P6yZ > .button-link_button__18xcn')
            .should('be.visible').click();

        /// кнопка продолжить
        cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
            .should('be.visible').click({force: true});

        ///проверка перехода на следующую страницу

        cy.get('.applicant_mainTextDesktop__3Jx-8')
            .should('be.visible');


        // кнопка подать заявку

        // cy.get('.course-choice-page_centerButton__2YETg > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
        //     .should('be.visible').click();
        //
        // //// кнопка отказаться
        // cy.get('.competition-page_button__1vNbN > .button-link_button__18xcn')
        //     .should('be.visible').click();
        //
        // /// нажать да
        // cy.get('.competition-page_buttonsDesktop__1p96n > .button-link_white__15ckV')
        //     .should('be.visible').click();
    })
})