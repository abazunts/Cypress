const loginHelperOfferHeap = require("../../../../../helpers/offerHeap/loginHelperOfferHeap.cy");
it('Update new office',
    () => {
            loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

            // check: title vacancies is visible
            cy.contains("Vacancies").should('be.visible');

            // click edit profile button
            cy.get('.sc-ctDLux > a').should('be.visible').click();

            // check: company name* is visible
            cy.contains('Company name*').should('be.visible');

            // click offices button
            cy.get('.MuiTabs-flexContainer > :nth-child(2)').should('be.visible').click();

            // click EDIT button
            cy.get(':nth-child(3) > .sc-kZHVfI > :nth-child(2) > div > svg > [cy="8.5"]')
                .as('editButton')
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

            //click DELETE button
            cy.get('@editButton').as('editBtn').should('be.visible');

            cy.get('@editBtn').click();

            cy.get('.sc-iWOQzb > :nth-child(2)').as('deleteButton').should('be.visible');

            cy.get('@deleteButton').click();

            // click remove button
            cy.get('.KiWgz').should('be.visible').click();

            // success
            cy.contains('Success').should('be.visible');

            // check: offices list is visible
            cy.contains('Add office').should('be.visible');
    });