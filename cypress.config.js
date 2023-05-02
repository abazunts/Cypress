const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        watchForFileChanges: false,
        // defaultCommandTimeout: 5000,
        baseUrl: 'https://sandbox.staging.it-incubator.ru',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    },
    env: {
        login_name: 'nastyamyshko123@gmail.com',
        login_password: 'Passwordgit1',
    },
    env: {
        loginName: 'nastyamysh@bk.ru',
        loginPassword: 'Passwordoffer1',
    },
})
