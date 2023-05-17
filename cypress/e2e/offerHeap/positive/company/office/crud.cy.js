const loginHelperOfferHeap = require('../../../../../helpers/offerHeap/loginHelperOfferHeap.cy')
describe('CRUD office', () => {

    beforeEach(() => {
        loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

        // check: title vacancies is visible
        cy.contains("Vacancies").should('be.visible');

        // click edit profile button
        cy.get('.sc-ctDLux > a').should('be.visible').click();

        // check: company name* is visible
        cy.contains('Company name*').should('be.visible');

        // click offices button
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').should('be.visible').click();
    });

    it('Add new office', () => {

        // click add office button
        cy.contains('Add office').should('be.visible').click();

        // check: title office address is visible
        cy.contains('Office address').should('be.visible');

        // check: office name field is visible, alias for office name field, input office name
        cy.get(':nth-child(1) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .should('be.visible')
            .as('office name')
            .type('111');

        cy.get('@office name').should('be.visible');

        // check: country field is visible, alias for office country, input office country
        cy.get(':nth-child(2) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
            .should('be.visible')
            .as('country')
            .type('Afg{enter}');

        cy.get('@country').should('be.visible');

        // check: cities field is visible, alias for office city, input office city
        cy.get('[style="position: relative;"] > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt')
            .should('be.visible')
            .as('city')
            .type('Talo{enter}');

        cy.get('@city').should('be.visible');

        // check: office address field is visible, alias for office address, input office address
        cy.get(':nth-child(4) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .as('address').should('be.visible').type('111');

        cy.get('@address').should('be.visible');

        // save
        cy.get('.sc-GhhNo > .sc-dIfARi').should('be.visible').click();

        // success
        cy.contains('Success').should('be.visible');
        cy.get('@office name').should('be.visible');

        // check: offices list is visible
        cy.contains('Add office').should('be.visible');

    });

    it('Update office', () => {

        // click EDIT button
        cy.get(':nth-child(3) > .sc-kZHVfI > :nth-child(2) > div > svg > [cy="8.5"]')
            .should('be.visible').click();

        cy.get('.sc-iWOQzb > :nth-child(1)').should('be.visible').click();

        // check: edit field is visible, alias for office name field, input office name
        cy.get('.sc-bWOGAC').should('be.visible');

        cy.get(':nth-child(1) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .should('be.visible')
            .as('new office name')
            .clear()
            .type('new name');

        cy.get('@new office name').should('be.visible');

        // check: office address field is visible, alias for office address, input office address
        cy.get(':nth-child(4) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
            .as('new address')
            .should('be.visible')
            .clear()
            .type('new address');

        cy.get('@new address').should('be.visible');

        // save
        cy.get('.sc-GhhNo > .sc-dIfARi').as('saveButton').should('be.visible').click();

        // success
        cy.contains('Success').should('be.visible');
        cy.get('@new office name').should('be.visible');

        // check: offices list is visible
        cy.contains('Add office').should('be.visible');
    })

    it('Delete office', () => {

        //click DELETE button
        cy.get(':nth-child(3) > .sc-kZHVfI > :nth-child(2) > div > svg > [cy="8.5"]')
            .should('be.visible').click();

        cy.get('.sc-iWOQzb > :nth-child(2)').as('deleteButton').should('be.visible');

        cy.get('@deleteButton').click();

        // click remove button
        cy.get('.KiWgz').should('be.visible').click();

        // success
        cy.contains('Success').should('be.visible');

        // check: offices list is visible
        cy.contains('Add office').should('be.visible');
    })
});