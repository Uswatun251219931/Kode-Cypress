/// <reference types="cypress" />
describe ('login/logout test', () => {
    
    before( () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    });
    it('Should try login with invalid data', () =>{
        cy.get('[id=signin_button]').click()
        cy.get('[id=login_form]').should('be.visible')
        cy.get('[id=user_login]').type('invalid username')
        cy.get('[id=user_password]').type('invalid password')
        cy.get('input[name="submit"]').click()
    });
    it('Should display error message', () =>{
        cy.get('[id=login_form]').should('be.visible').and('contain','Login and/or password are wrong.')
        
    });

    it('Should try login with valid data', () =>{
     
        cy.fixture("example").then (user => {
            const username= user.username
            cy.get('[id=user_login]').clear()
            cy.get('[id=user_login]').type(user.username)
            cy.get('[id=user_password]').clear()
            cy.get('[id=user_password]').type(user.pass)
            cy.get('input[name="submit"]').click()
           
            cy.url('http://zero.webappsecurity.com/index.html')

        })
    });

    it('Should logout from system', () =>{
        cy.get('.dropdown-menu > li:nth-child(3)>a')
        .should('have.attr','href')
        .and('include', '/logout.html').then( (href) =>{
        cy.visit('http://zero.webappsecurity.com/logout.html')
})
    });

})
