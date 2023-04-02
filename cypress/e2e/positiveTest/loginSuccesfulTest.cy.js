describe('Login test', () => {

    it('Enter login and password', () => {
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
        cy.contains("Ознакомься с инструкцией и продолжай регистрацию")
            .should('be.visible')
    })
})