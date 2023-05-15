const loginHelperOfferHeap = require('../../../helpers/offerHeap/loginHelperOfferHeap.cy')
describe('log in, add new vacancy, general info, geo tag, additionla info, work tag', () => {

    it('Add new vacancy', () => {
        loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

        /// click add vacancy button
        cy.get('.sc-dIfARi')
            .should('be.visible').click();

        cy.contains("General Info")
            .should('be.visible');

        ///input vacancy name
        cy.contains("Vacancy name*").should('be.visible');

        cy.get(':nth-child(3) > .sc-lknQiW > .sc-jmpzUR').type('Developer')

        /// select status
        cy.get(':nth-child(5) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("Draft").as('Selected Status')
            .click();

        cy.get('@Selected Status')
            .should('be.visible');

        /// select speciality
        cy.get(':nth-child(7) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("Fullstack").as('Selected speciality')
            .click();

        cy.get('@Selected speciality')
            .should('be.visible');

        /// select positions (multiple values)
        cy.get(':nth-child(9) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("Middle").as('Selected position').click();

        cy.get('.css-1gtu0rj-indicatorContainer').click();

        cy.contains("Senior").as('Selected position 2').click();

        cy.get('@Selected position').should('be.visible');

        cy.get('@Selected position 2').should('be.visible');


        /// checkbox team lead
        cy.contains("Teamlead").should('be.visible');

        cy.get('.sc-hAQmFe').as('Checkbox')
            .should('not.be.checked');

        cy.get('@Checkbox').click();

        cy.get('@Checkbox').should('be.enabled');

        /// language
        cy.get(':nth-child(12) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("German").as('Selected language')
            .click();

        cy.get('@Selected language')
            .should('be.visible');

        /// select language level
        cy.get(':nth-child(14) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("A2").as('Selected language level')
            .click();

        cy.get('@Selected language level')
            .should('be.visible');

        /// remote work
        cy.get('[data-type="Yes"] > .sc-gzrROc').as('Yes');

        // cy.get('.kfdamx > .sc-gzrROc').as('No');

        cy.get('@Yes').should('not.be.selected');

        cy.get('@Yes').click();

        /// choose office
        cy.get(':nth-child(20) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .click();

        cy.contains("Bla").as('Selected office').then(($option) => {
            cy.wrap($option).invoke('click');
        });

        cy.get('@Selected office').invoke('click');


        /// select certificates list (multiple values)

        /// select technical certificates (multiple values)
        cy.get(':nth-child(26) > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt').as('select technical certificate')
            .should('be.visible').click();

        cy.contains("techical cert").as('Selected certificate')
            .click();

        cy.get('@Selected certificate')
            .should('be.visible');

        cy.get('.css-sav92t-control > .css-1wy0on6 > :nth-child(3)')
            .click();

        cy.contains("second certificate").as('Selected certificate 2')
            .click();

        cy.get('@Selected certificate').should('be.visible');

        cy.get('@Selected certificate 2').should('be.visible');

        /// select language certificates
        cy.get(':nth-child(28) > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql').as('select language certificate')
            .should('be.visible').click();

        cy.contains("12").as('Selected language certificate')
            .click();

        cy.get('@Selected language certificate')
            .should('be.visible');

        cy.get('.css-sav92t-control > .css-1wy0on6 > :nth-child(3)').click();

        cy.contains("Language cert").as('Selected language certificate 2')
            .click();

        cy.get('@Selected language certificate').should('be.visible');

        cy.get('@Selected language certificate 2').should('be.visible');

        ///add description
        cy.contains("Description*").should('be.visible');

        cy.get('.sc-bBABsx').type('hello')
            .should('be.visible');

        ///salary min, max
        cy.contains("Salary (min)*").should('be.visible');
        cy.contains("Salary (max)*").should('be.visible');

        cy.get('[style="display: flex; flex-direction: row; justify-content: space-between;"] > :nth-child(1) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .type('500').should('be.visible');

        cy.get(':nth-child(2) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .type('1500').should('be.visible');

        ///select currency
        cy.contains("Choose currency*").should('be.visible');

        cy.get(':nth-child(34) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible').click();

        cy.contains("Eur").as('Currency')
            .click();

        cy.get('@Currency').should('be.visible');

        ///skills
        cy.contains("Skills*").should('be.visible');

        cy.get('.sc-eYqcxL > .sc-dIfARi').as('Add button')
            .should('be.disabled');

        cy.get('.sc-fmPOXC').type('my skill is');

        cy.get('@Add button').should('be.enabled');

        cy.get('@Add button').click();

        ///save as draft
        cy.contains("Save as draft").should('be.visible');

        // cy.get('.kddxtZ').click();
        //
        // cy.contains("Vacancies").should('be.visible');

    })
});