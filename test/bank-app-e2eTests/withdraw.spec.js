/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login')
    })

    afterEach(()=>{
        cy.title()
            .should('include', 'member')
        
        cy.get('.list-group > :nth-child(5)')
        .should('contain', '48000')
        
        cy.get('a')
        .eq(7)
        .click()

        cy.title()
            .should('include', 'Deposit')

        cy.get('#amount')
            .type('2000')
            .should('have.value', '2000')
        
        cy.get('.btn-success')
        .click()

        cy.title()
            .should('include', 'member')
        
        cy.get('.list-group > :nth-child(5)')
        .should('contain', '50000')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Testing Withdrawal', () => {
      // https://on.cypress.io/type
      cy.get('#email')
        .type('jheanel@gmail.com')
        .should('have.value', 'jheanel@gmail.com')
  
      cy.get('#password')
        .type('Password123')
        .should('have.value', 'Password123')
  
        
      cy.get('button').contains(' Login').click()
      cy.title().should('include', 'member')

      cy.get('.list-group > :nth-child(5)')
        .should('contain', '50000')

        cy.get('a')
        .eq(6)
        .click()

        cy.title()
            .should('include', 'Withdraw')
    
        cy.get('#amount')
            .type('2000')
            .should('have.value', '2000')
        
        cy.get('.btn-success')
        .click()

        cy.title()
            .should('include', 'member')
        
        cy.get('.list-group > :nth-child(5)')
        .should('contain', '48000')

    })
  })
  