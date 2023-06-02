const loginHelper = require('../../../helpers/posochnica/loginHelper.cy');
const checkboxHelper = require('../../../helpers/posochnica/checkboxHelper.cy');
const freeCodeCamp = 'qavaltest4';
const codewars = 'qavaltest4';
const adminSite = 'https://sandbox.staging.it-incubator.ru/admin';
const name = 'Иван';
const sureName = 'Иванов';
const fatherName = 'Иванович';
const dateOfBirth = '11112001';
const country = 'Беларусь';
const city = 'Минск';

describe('E2E Testing', () => {

    it('E2E test', () => {

        // log in
        loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));

        // checkbox
        checkboxHelper.checkBox();
        cy.contains("Обучение в It-Incubator").should('be.visible');

        // admin site
        cy.visit(adminSite)

        // confirm telegram
        cy.get('.MuiContainer-root > div > :nth-child(1)').should('be.visible').click();

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // input freeCodeCamp
        cy.visit('/');

        cy.get(':nth-child(2) > .social-networks-form-page_inputBlockDesktop__2zOYN > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type(freeCodeCamp)
            .should('be.visible');

        // input codewars
        cy.get(':nth-child(3) > .social-networks-form-page_inputBlockDesktop__2zOYN > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type(codewars)
            .should('be.visible');

        // click check button
        cy.get('button[type="submit"]').should('be.visible').click();

        // click select course button
        cy.get('.social-networks-form-page_continueButtonDesktop__1t7QE > .button-link_button__18xcn')
            .should('be.enabled').click();

        // continue button is disabled
        cy.contains('Продолжить').as('cont button').should('be.disabled');

        // select course
        cy.get(':nth-child(9) > .course-choice-page_third__3V6QE > .button-link_button__18xcn')
            .should('be.visible').click();

        // click continue button
        cy.contains('Продолжить').as('cont button').should('be.visible');
        cy.get('@cont button').click();

        //проверка перехода на следующую страницу
        cy.get('.applicant_mainTextDesktop__3Jx-8')
            .should('be.visible');

        // admin site
        cy.visit(adminSite);

        // add 60 points to each
        for (let i = 0; i < 3; i++) {
            cy.get('div > :nth-child(9)').click();
        }
        cy.visit('/');

        // check points in codewars JS
        cy.get(':nth-child(3) > .scores_wrapperSubScores__1bv2b > .course-choice-page_subScoreFieldDesktop__2PsPm > .course-choice-page_subScoresWrapper__1tS29 > .course-choice-page_subWrapperInfo__3BnoV > .course-choice-page_userInfo__MooYo > .course-choice-page_scoreInfo__39kvl > span')
            .contains("Баллы: 60");

        // click make a request button
        cy.contains('Подать заявку').should('be.visible').click();

        // проверка кнопки продолжить
        cy.get('.competition-page_continueButton__2cZhu > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click();

        // checkbox "подтверди что ты самурай"
        checkboxHelper.checkBox();
        cy.contains('Запросить оплату').should('be.visible');

        // name
        cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(name);

        // request button is disabled
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .as('request').should('not.be.enabled');

        // surname
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(sureName);
        cy.get('@request').should('not.be.enabled');

        // Father's name
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type(fatherName);
        cy.get('@request').should('not.be.enabled');

        // date of birth
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type(dateOfBirth);
        cy.get('@request').should('not.be.enabled');

        // female gender
        cy.get('.personal-info-form-page_genderChoice__We62Y > :nth-child(2)')
            .as('gender').click();
        cy.get('@gender').should('be.enabled');
        cy.get('@request').should('not.be.enabled');

        // country
        cy.get('.MuiAutocomplete-hasClearIcon > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
        cy.contains(country).click();
        cy.get('@request').should('not.be.enabled');

        // city
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
        cy.contains(city).click();
        cy.get('@request').should('not.be.enabled');

        // checkbox "заполни личные данные"
        cy.get('.jss9').should('not.be.checked').check();

        // кнопка запросить доступна
        cy.get('@request').should('be.enabled');

    })
})