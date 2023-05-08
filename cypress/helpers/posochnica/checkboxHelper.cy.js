module.exports = {
    checkBox: () => {
        cy.get('input[type="checkbox"]').as('checkBox');
        cy.get('@checkBox').should('not.be.checked')
        cy.contains('Продолжить').should('be.disabled');
        cy.get('@checkBox').check();
        cy.get('@checkBox').should('be.checked');
        cy.contains('Продолжить').should('be.not.disabled');
        cy.contains('Продолжить').click();
    }
};