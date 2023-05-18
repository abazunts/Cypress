module.exports = {
    login: (name, password) => {

        cy.visit('https://offerhunt.staging.it-incubator.ru/');

        cy.viewport(1920, 1080);

        cy.location('protocol')
            .should('eq', 'https:');

        cy.contains("Sign in")
            .should('be.visible').click();

        cy.get('#login_email').type(name)
            .should('be.visible');

        cy.get('#login_password').type(password)
            .should('be.visible');

        cy.get('form > .sc-dIfARi')
            .should('be.visible').click();

        cy.contains("Add new vacancy")
            .should('be.visible')
    }
};