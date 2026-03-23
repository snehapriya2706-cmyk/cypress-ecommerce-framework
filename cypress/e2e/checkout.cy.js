import productPage from "../Pages/ProductPage";
import CartPage from "../Pages/cartPage";
import checkoutPage from "../Pages/checkoutPage";

describe('Checkout Test', ()=>{
   const product = new productPage()
   const cart = new CartPage()
   const checkout = new checkoutPage()

   beforeEach(()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        product.addProductstoCart()
        cart.clickCartIcon()
})

it('Complete checkout successfully', ()=>{

    checkout.clickCheckout()

    checkout.enterFirstName('Sneha')
    checkout.enterLastName('Murali')
    checkout.enterPostalCode('600017')
    
    checkout.enterContinue()

    checkout.checkOutOverview()

    checkout.enterFinish()

    checkout.verifyOrderSuccess()
})

it('Validate mandatory fields', ()=>{
    checkout.clickCheckout()
    checkout.enterContinue()
    checkout.verifyErrorMessage()
})

it('Cancel Checkout', ()=>{
    checkout.clickCheckout()
    checkout.enterCancel()
    cy.url().should('include', 'cart' )
})

})

