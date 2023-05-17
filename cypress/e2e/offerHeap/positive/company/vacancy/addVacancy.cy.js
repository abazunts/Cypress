const loginHelperOfferHeap = require('../../../../../helpers/offerHeap/loginHelperOfferHeap.cy')

it('Add new vacancy', () => {

    loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

    // click add vacancy button
    cy.get('.sc-dIfARi')
        .should('be.visible').click();

    cy.contains("General Info")
        .should('be.visible');

    //input vacancy name
    cy.contains("Vacancy name*").should('be.visible');

    cy.get(':nth-child(3) > .sc-lknQiW > .sc-jmpzUR').type('Test')

    // select status
    cy.get(':nth-child(5) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible').click();

    cy.contains("Draft").as('Selected Status')
        .click();

    cy.get('@Selected Status').should('be.visible');

    // select speciality
    cy.get(':nth-child(7) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible')
        .as('Speciality')
        .type('Frontend{enter}');

    cy.get('@Speciality')
        .should('be.visible');

    // select positions (multiple values)
    cy.get(':nth-child(9) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible')
        .type('Junior{enter}')
        .type('Middle{enter}');

    cy.contains('Junior').should('be.visible');
    cy.contains('Middle').should('be.visible');


    // checkbox team lead
    cy.contains("Teamlead").should('be.visible');

    cy.get('.sc-hAQmFe').as('Checkbox')
        .should('not.be.checked');

    cy.get('@Checkbox').click();

    cy.get('@Checkbox').should('be.enabled');

    // language
    cy.get(':nth-child(12) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt')
        .should('be.visible')
        .type('German{enter}')

    cy.contains('German').should('be.visible');


    // select language level
    cy.get(':nth-child(14) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible')
        .type('A1{enter}');

    cy.contains('A1').should('be.visible');

    // remote work
    cy.get('[data-type="Yes"] > .sc-gzrROc').as('Yes');
    // cy.get('.kfdamx > .sc-gzrROc').as('No');

    cy.get('@Yes').should('not.be.selected');

    cy.get('@Yes').click();

    // choose office
    cy.get(':nth-child(20) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible')
        .as('Office')
        .type('1{enter}')
        .type('3{enter}')

    cy.get('@Office').should('be.visible');

    // select certificates list (multiple values)

    // select technical certificates (multiple values)
    cy.get(':nth-child(26) > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt').as('select technical certificate')
        .should('be.visible')
        .as('Technical certificate')
        .type('tech{enter}');

    cy.contains('tech sert').should('be.visible');

    // select language certificates
    cy.get(':nth-child(28) > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql').as('select language certificate')
        .should('be.visible')
        .as('Language certificate')
        .type('lang{enter}');

    cy.contains('lang cert').should('be.visible');


    // add description
    cy.contains("Description*").should('be.visible');

    cy.get('.sc-bBABsx').type('Hello!').should('be.visible');

    // salary min, max
    cy.contains("Salary (min)*").should('be.visible');
    cy.contains("Salary (max)*").should('be.visible');

    cy.get('[style="display: flex; flex-direction: row; justify-content: space-between;"] > :nth-child(1) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
        .type('500').should('be.visible');

    cy.get(':nth-child(2) > .sc-fmZqYP > .sc-lknQiW > .sc-jmpzUR')
        .type('1500').should('be.visible');

    //select currency
    cy.contains("Choose currency*").should('be.visible');

    cy.get(':nth-child(34) > .sc-jTjUTQ > .css-b62m3t-container > .css-d04b62-control > .css-1d8n9bt > .css-ackcql')
        .should('be.visible')
        .type('Usd{enter}');

    cy.contains('Usd').should('be.visible');

    //skills
    cy.contains("Skills*").should('be.visible');

    cy.get('.sc-eYqcxL > .sc-dIfARi').as('Add button')
        .should('be.disabled');

    cy.get('.sc-fmPOXC').type('my skill is');

    cy.get('@Add button').should('be.enabled');

    cy.get('@Add button').click();

    //save as draft
    cy.contains("Save as draft").should('be.visible');

    cy.get('.kddxtZ').as('Save as draft').should('be.visible');

    cy.get('@Save as draft').click();

    cy.contains("Vacancies").should('be.visible');

});