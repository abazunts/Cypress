describe('E2E Testing', () => {

    it('E2E test', () => {
        cy.visit('/')

        cy.viewport(1920, 1080)

        cy.location('protocol')
            .should('eq', 'https:')

        cy.title()
            .should('eq', 'Песочница | IT-INCUBATOR')

        cy.contains("Войти через GitHub")
            .should('be.visible').click()


        cy.origin('https://github.com', () => {
            cy.get('input[name="login"]').type('nastyamyshko123@gmail.com')
                .should('be.visible')

            cy.get('input[type="password"]').type('Passwordgit1')
                .should('be.visible')

            cy.get('input[type="submit"]')
                .should('be.visible').click()
            // cy.contains("Authorize it-incubator").click({multiple: true})
        })

        /////////проверка чекбокса

        cy.get('input[type="checkbox"]').check()
        cy.contains('Продолжить').click()


        ////////// ввода никнеймов, привязка телеги и выбор курса
        cy.contains("Обучение в It-Incubator").should('be.visible')


        cy.get(':nth-child(2) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible')

        cy.get(':nth-child(3) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible')

        /// кнопка проверить
        cy.get('button[type="submit"]')
            .should('be.visible').click()

        // cy.contains("Привязать")
        //     .should('be.visible').click()


        /// кнопка выбрать курс
        cy.get('.info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click()

        cy.get(':nth-child(1) > .course-choice-page_third__3P6yZ > .button-link_button__18xcn')
            .should('be.visible').click()

        /// кнопка продолжить
        cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
            .should('be.visible').click({force: true})

        ///проверка перехода на следующую страницу

        cy.get('.applicant_mainTextDesktop__3Jx-8')
            .should('be.visible')


        // кнопка подать заявку

        // cy.get('.course-choice-page_centerButton__2YETg > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
        //     .should('be.visible').click()
        //
        // //// кнопка отказаться
        // cy.get('.competition-page_button__1vNbN > .button-link_button__18xcn')
        //     .should('be.visible').click()
        //
        // /// нажать да
        // cy.get('.competition-page_buttonsDesktop__1p96n > .button-link_white__15ckV')
        //     .should('be.visible').click()
    })
})