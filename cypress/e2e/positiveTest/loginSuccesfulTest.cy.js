const loginHelper = require('../../helpers/loginHelper.cy');
describe('Login test', () => {

    it('Enter login and password', () => {
        loginHelper.login(Cypress.env('login_name'), Cypress.env('login_password'));
    })
})