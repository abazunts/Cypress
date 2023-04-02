describe('Change of course on the course registration page', () => {
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
            // cy.contains("Authorize it-incubator").click({multiple: true})
        })

        cy.get('.course-choice-page_courseBlock__9yabz > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click()

        cy.contains('button',"Выбрать")
            .should('be.visible').click({multiple: true})


        cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
            .should('be.visible').click({multiple: true})

    })
})