// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {

    let username, password

    cy.visit('/')

    cy.get('.orangehrm-demo-credentials')
        .find('p')
        .contains('Username')
        .invoke('text')
        .then((text) => {
            username = text.split(': ')[1].trim()

            cy.get('.orangehrm-demo-credentials')
                .find('p')
                .contains('Password')
                .invoke('text')
                .then((text) => {
                    password = text.split(': ')[1].trim()

                    cy.log(username)
                    cy.log(password)

                    cy.get('input[name="username"]')
                        .type(username)
                    cy.get('input[name="password"]')
                        .type(password)
                    cy.get('.orangehrm-login-button')
                        .click()
                })
        })
})