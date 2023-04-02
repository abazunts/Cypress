module.exports = {
    checkBox: () => {
        cy.get('input[type="checkbox"]').check();
        cy.contains('Продолжить').click();
    }
};