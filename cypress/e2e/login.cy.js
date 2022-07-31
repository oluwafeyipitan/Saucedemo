

import * as userLogin from './features/Loginpage.js'
import * as products from './features/Productpage.js'
import * as Cart from './features/Cartpage.js'
import * as FormPage from './features/Checkoutpage.js'
const logoutUser =require('./features/Logoutpage.js')



describe ("Saucedemo",()=>{

    before(() => {

        cy.log("sign-in steps")
        cy.visit('/')

        cy.xpath("//div[@class='login_logo']")
            .should('be.visible')

        userLogin
            .loginUser('standard_user','secret_sauce')

        cy.wait(3000)

    })


    it("should select items and checkout",()=>{

        cy.log('steps')

        products.inventoryUrl();

        products.OptionsCheck();
    
        products.AddtoCart();

        products.RemovefromCart();

        products.GotoCart();

        //should check cart,remove an item and continue to checkout
        Cart.Validations();
        
        Cart.removeProduct();

        Cart.checkout();

        //should fill the checkout form and checkout

        FormPage.vaLidations();

        FormPage.fillForm('Jackie','Eden','100000');

        FormPage.submitForm();
        
    })


    after(() => {

        logoutUser.logout()

        logoutUser.checkurl()

    })
})