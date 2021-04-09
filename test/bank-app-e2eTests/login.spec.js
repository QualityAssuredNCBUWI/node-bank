/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Testing Login', () => {
    // https://on.cypress.io/type
    cy.get('#email')
    .type('Test3@email.com')
    .should('have.value', 'Test3@email.com')

    cy.get('#password')
    .type('Password')
    .should('have.value', 'Password')

      
    cy.get('button').contains(' Login').click()
    cy.title().should('include', 'member')
  })
})

