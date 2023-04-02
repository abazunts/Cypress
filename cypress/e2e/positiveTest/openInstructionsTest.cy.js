describe('Open and close the instructions', () => {

    it('Open and close the instructions', () => {
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
        cy.contains('Инструкция по заполнению социальных сетей')
            .should('be.visible').click()

        cy.get('.global-page_arrowContainer__sQICY > span')
            .should('be.visible').click()
    })
})