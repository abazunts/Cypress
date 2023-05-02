describe('Negative Tests', () => {

    it('Incorrect Login or Password', () => {
        cy.visit('/')

        cy.viewport(1920, 1080)

        cy.location('protocol')
            .should('eq', 'https:')

        cy.title()
            .should('eq', 'Песочница | IT-INCUBATOR')

        cy.contains("Войти через GitHub")
            .should('be.visible').click()


        cy.origin('https://github.com', () => {
            cy.get('input[name="login"]').type('nastyamyshko123@gmail.co')
                .should('be.visible')

            cy.get('input[type="password"]').type('Passwordgit1')
                .should('be.visible')

            cy.get('input[type="submit"]')
                .should('be.visible').click()

            cy.contains("Incorrect username or password.")
                .should('be.visible')
        })
    })
})