export class LoginPage {

    email = 'input[name="login"]'
    password = 'input[type="password"]'
    login_button = 'input[type="submit"]'

    enterLogin(login) {
        cy.get(this.email).type(login)
    }
    enterPassword(psw) {
        cy.get(this.password).type(psw)
    }
    clickLoginButton() {
        cy.get(this.login_button).click()
    }
}