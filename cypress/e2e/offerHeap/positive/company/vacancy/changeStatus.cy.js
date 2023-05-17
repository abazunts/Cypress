const loginHelperOfferHeap = require('../../../../../helpers/offerHeap/loginHelperOfferHeap.cy')

it('Change vacancy status', () => {

    loginHelperOfferHeap.login(Cypress.env('loginName'), Cypress.env('loginPassword'));

    cy.contains("Vacancies").should('be.visible'); // проверка: заголовок vacancies должно быть отображено

    cy.contains("Developer").should('be.visible').click(); // проверка: если вакансия developer отображено - сделать клик

    cy.contains("Back to vacancies list").should('be.visible'); // если клик прошел успешно - переход на страницу с вакансией. Проверка: отображен ли заголовок Back to vacancies list

    cy.get('.sc-cuOiQm > .sc-liQGml').click(); // клик на дропдаун

    cy.contains("Active").should('be.visible').click(); // клик для выбора статуса из выпавшего списка дропдауна

    cy.contains("Success").should('be.visible'); // проверка: если статус изменен появлеяется всплывающее окно success

});