/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login')
    })

  
    // https://on.cypress.io/interacting-with-elements
  
    it('Testing Transfer', () => {
      // https://on.cypress.io/type
        cy.get('#email')
        .type('Isamutai200@gmail.com')
        .should('have.value', 'Isamutai200@gmail.com')
    
        cy.get('#password')
        .type('poppop')
        .should('have.value', 'poppop')

        
        cy.get('button').contains(' Login').click()

        cy.title().should('include', 'member')

        cy.get('.list-group > :nth-child(5)').should('contain', '5000')
        
        cy.get('a').eq(8).click() //logout

        cy.title().should('include', 'Login') //back on login page

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
        .eq(9)
        .click()  //click transfer

        cy.title().should('include', 'Transfer')
        
        cy.get('#beneficiary')
        .type('1234567')
        .should('have.value', '1234567')

        cy.get('#amount')
            .type('2000')
            .should('have.value', '2000')
        
        cy.get('.btn-success')
        .click()

        cy.title()
            .should('include', 'member')

        cy.get('a').eq(8).click() //logout

        cy.title().should('include', 'Login')

    })

    it('Testing User Recieved', ()=>{

      cy.get('#email')
        .type('Isamutai200@gmail.com')
        .should('have.value', 'Isamutai200@gmail.com')
  
    cy.get('#password')
      .type('poppop')
      .should('have.value', 'poppop')

      
        cy.get('button').contains(' Login').click()

        cy.title().should('include', 'member')

        cy.get('.list-group > :nth-child(5)').should('contain', '7000')

        cy.get('a').eq(8).click()

        cy.title().should('include', 'Login')
    })

})
  