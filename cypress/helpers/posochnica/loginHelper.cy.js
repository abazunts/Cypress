module.exports = {
    login: (name, password) => {
        cy.visit('/')

        cy.viewport(1920, 1080)

        cy.location('protocol')
            .should('eq', 'https:')

        cy.title()
            .should('eq', 'Песочница | IT-INCUBATOR')

        cy.contains("Войти через GitHub")
            .should('be.visible').click()

        cy.origin('https://github.com', { args: { name, password } },({ name, password }) => {
            cy.get('input[name="login"]').type(name)
                .should('be.visible')

            cy.get('input[type="password"]').type(password)
                .should('be.visible')

            cy.get('input[type="submit"]')
                .should('be.visible').click()
            // cy.contains("Authorize it-incubator").click({multiple: true})
        })
        cy.contains("Ознакомься с инструкцией и продолжай регистрацию")
            .should('be.visible')
    }
};