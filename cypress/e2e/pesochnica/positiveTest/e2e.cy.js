const loginHelper = require('../../../helpers/posochnica/loginHelper.cy');
const checkboxHelper = require('../../../helpers/posochnica/checkboxHelper.cy');

describe('E2E Testing', () => {

    it('E2E test', () => {
        loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));

        // cy.clock(10000);

        checkboxHelper.checkBox();

        // ввода никнеймов, привязка телеги и выбор курса
        cy.contains("Обучение в It-Incubator").should('be.visible');


        // переход на сайт admin
        cy.visit('https://sandbox.staging.it-incubator.ru/admin')


        // клик на привязку телеги
        cy.get('.MuiContainer-root > div > :nth-child(1)').should('be.visible').click();

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // переход обратно после привязки телеги
        cy.visit('https://sandbox.staging.it-incubator.ru/');

        cy.get(':nth-child(2) > .social-networks-form-page_inputBlockDesktop__2zOYN > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible');

        cy.get(':nth-child(3) > .social-networks-form-page_inputBlockDesktop__2zOYN > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('qavaltest4')
            .should('be.visible');

        // кнопка проверить
        cy.get('button[type="submit"]').should('be.visible').click();

        cy.clock(5000);


        // кнопка выбрать курс
        cy.get('.social-networks-form-page_continueButtonDesktop__1t7QE > .button-link_button__18xcn')
            .should('be.enabled').click();

        // проверка кнопка продолжить не доступна до выбора курса
        // cy.get('.course-choice-page_buttons__2DLqJ > .button-link_red__3CQND')
        //     .as('cont button')
        //     .should('be.disabled');

        // клик кнопки фронтенд
        cy.get(':nth-child(9) > .course-choice-page_third__3V6QE > .button-link_button__18xcn')
            .should('be.visible').click();

        // // скролл вниз
        // cy.get('.course-choice-page_courseChoicePopup__1XGrT')
        //     .scrollTo('bottomRight');

        // нажать кнопку продолжить
        cy.get('.course-choice-page_buttons__3fBsv > .button-link_red__3CQND')
            .as('cont button')
            .should('be.visible');

        cy.get('@cont button').click();

        //проверка перехода на следующую страницу
        cy.get('.applicant_mainTextDesktop__3Jx-8')
            .should('be.visible');

        // переход на сайт admin
        cy.visit('https://sandbox.staging.it-incubator.ru/admin');

        // начислить 60 баллов
        cy.get('div > :nth-child(9)').click();
        cy.get('div > :nth-child(9)').click();
        cy.get('div > :nth-child(9)').click();

        // переход обратно после начисления баллов
        cy.visit('https://sandbox.staging.it-incubator.ru/');

        // проверка суммы баллов JS в codewars
        cy.get(':nth-child(3) > .scores_wrapperSubScores__1bv2b > .course-choice-page_subScoreFieldDesktop__2PsPm > .course-choice-page_subScoresWrapper__1tS29 > .course-choice-page_subWrapperInfo__3BnoV > .course-choice-page_userInfo__MooYo > .course-choice-page_scoreInfo__39kvl > span')
            .contains("Баллы: 60");

        // клик кнопки подать заявку
        cy.get('.course-choice-page_centerButton__2l5Ja > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn').click();

        // проверка кнопки продолжить
        cy.get('.competition-page_continueButton__2cZhu > .info-button_menuWrapper__z4N7n > .button-link_button__18xcn')
            .should('be.visible').click();

        // чекбоксы на странице "подтверди что ты самурай"
        checkboxHelper.checkBox();

        // проверка на переход на страницу
        cy.contains('Запросить оплату').should('be.visible');

        // имя
        cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type("Фы");

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // фамилия
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("Фа");

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // отчество
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type("Фу");

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // дата рождения
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type("11112001");

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // пол женский
        cy.get('.personal-info-form-page_genderChoice__We62Y > :nth-child(2)')
            .as('sex')
            .click();

        cy.get('@sex').should('be.enabled');

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // страна
        cy.get('.MuiAutocomplete-hasClearIcon > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();

        cy.contains('Беларусь').click();

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // город
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();

        cy.contains('Минск').click();

        // кнопка запросить недоступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('not.be.enabled');

        // чекбокс на странице "заполни личные данные"
        cy.get('.jss9').should('not.be.checked').check();

        // кнопка запросить доступна
        cy.get('.personal-info-form-page_buttons__30Z1k > .button-link_red__3CQND')
            .should('be.enabled');


    })
})