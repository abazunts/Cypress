import {LoginPage} from "./pages/login_page";


describe('E2E Testing', () => {

    it('Sign in', () => {
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
            cy.contains("Authorize it-incubator").click({multiple: true})
        })

        // it('Read the instructions', () => {
        //     // cy.get('input[type="checkbox"]').check()
        //     //
        //     // cy.contains('Продолжить').click()
        //     })


        // it('Fill in the information', () => {
        //     //
        //     // cy.contains("Обучение в It-Incubator").should('be.visible')
        //     //
        //     //
        //     // cy.get(':nth-child(2) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        //     //     .type('qavaltest4')
        //     //     .should('be.visible')
        //     //
        //     // cy.get(':nth-child(3) > .social-networks-form-page_inputBlockDesktop__A2Gmi > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        //     //     .type('qavaltest4')
        //     //     .should('be.visible')
        //     //
        //     // cy.get('button[type="submit"]')
        //     //     .should('be.visible').click()
        //     //
        //     // cy.contains("Привязать")
        //     //     .should('be.visible').click()
        //
        //     // cy.contains("Проверить")
        //     //     .should('be.visible').click()
        //
        //     cy.contains("Выбрать курс")
        //         .should('be.visible').click()
        //
        //     cy.get(':nth-child(1) > .course-choice-page_third__3P6yZ > .button-link_button__18xcn')
        //         .should('be.visible').click()
        //
        //     cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
        //         .should('be.visible').click()
        //
        //      })

        it('Course Registration', () => {
            cy.get('input[type="checkbox"]').check()

            cy.contains('Продолжить').click()
            })




        })
    })
