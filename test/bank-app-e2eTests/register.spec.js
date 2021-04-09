/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login')
    })

    // afterEach(()=>{
    //     cy.visit('http://localhost:3000/login')

    //     cy.get(':nth-child(2) > .nav-link').click()

    //     cy.get('#email')
    //     .type('Test1@email.com')
    //     .should('have.value', 'Test1@email.com')
    
    //     cy.get('#password')
    //     .type('Password')
    //     .should('have.value', 'Password')
    

    //     cy.get('button').contains(' Login').click()
    //     cy.title().should('include', 'member')
    // })

    
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Testing Registration', () => {

        cy.get(':nth-child(3) > .nav-link').click()

        // cy.get(':nth-child(5) > [href="/register"]')
        //     .click()

            cy.get('#name')
                .type('Test3')
                .should('have.value', 'Test3')

            cy.get('#email')
            .type('test3@email.com')
            .should('have.value', 'test3@email.com')

            cy.get('#password')
            .type('Password')
            .should('have.value', 'Password')

            cy.get('#card')
                .type('777777777777')
                .should('have.value', '777777777777')
            
            cy.get('.btn-success')
                .click()

            cy.title().should('include', 'Login')


            


    })
  })
  