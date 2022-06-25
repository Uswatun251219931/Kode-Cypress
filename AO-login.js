/// <reference types="cypress" />
describe('Automation Test Login ', () => {
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/')
        
    });

    it('SL-1 Login not success, Username empty', () => {
    

          
            cy.get('[id=user-name]').clear()
            cy.get('[id=password]').type('ada')
          
            cy.get('[id=login-button]').click()
           
            cy.get('h3[data-test="error"]').should('be.visible')
            .and('contain','Epic sadface: Username is required')
            

      
    });
    it('SL-2 Login not success, Password empty', () => {
    

          
        cy.get('[id=user-name]').clear()
        cy.get('[id=user-name]').type('ada')
        cy.get('[id=password]').clear()
      
        cy.get('[id=login-button]').click()
       
        cy.get('h3[data-test="error"]').should('be.visible')
        .and('contain','Epic sadface: Password is required')
        

  
});



    it('SL-3 Login success', () => {
        
        cy.fixture("example").then (user => {
           
            cy.get('[id=user-name]').clear()
            cy.get('[id=user-name]').type(user.username_saucedemo)
            cy.get('[id=password]').clear()
            cy.get('[id=password]').type(user.pass_saucedemo)
            cy.get('[id=login-button]').click()
           
            cy.url('https://www.saucedemo.com/inventory.html')

        })
      
    });

    it('SL-3 Login Failed, username & password wrong', () => {
        
        cy.fixture("example").then (user => {
           
            cy.get('[id=user-name]').clear()
            cy.get('[id=user-name]').type('apa aja')
            cy.get('[id=password]').clear()
            cy.get('[id=password]').type('kepo')
            cy.get('[id=login-button]').click()

            cy.get('h3[data-test="error"]').should('be.visible')
            .and('contain','Epic sadface: Username and password do not match any user in this service')
           
            

        })
      
    });


   
    // it('add item to icon cart success', ()=> {

    //     cy.get('[id=add-to-cart-sauce-labs-backpack]').click()
    //     cy.get('[id=shopping_cart_container]').should("contain", "1")
    //     //cy.get('[id=shopping_cart_container]').click()
    //    // cy.url('https://www.saucedemo.com/cart.html')
    // }
    
    // )
    
   


})