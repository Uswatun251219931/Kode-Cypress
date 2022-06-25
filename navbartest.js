/// <reference types="cypress" />
describe ('Navbar Test', () => {
    
    before( () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    });
    it('Should display online Banking Menu', () =>{
        cy.get('[id=onlineBankingMenu]').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible')
        .and('contain','Online Banking')
 
    });

    it('Should display Feedback Content', () =>{
        cy.get('[id=feedback]').click()
        cy.url().should('include', '/feedback.html')
        cy.contains('h3#feedback-title','Feedback')
 
    });
    
    
    it('Should display Homepage Content', () =>{
        cy.get('.container>a')
        .should('have.attr','href')
        .and('include', '/index.html').then( (href) =>{
            cy.visit('http://zero.webappsecurity.com/index.html')
            cy.contains('h4','Online Banking')
        });
       
        
 
    });
})