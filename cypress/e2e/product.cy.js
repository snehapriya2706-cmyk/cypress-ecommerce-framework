import productPage from "../Pages/ProductPage";

describe('Product Test', ()=>{

   const product = new productPage()

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it('View Products', ()=>{
        product.verifyProductList()
    })

    it('Add and remove products in cart', ()=>{
        product.addProductstoCart()
        product.verifyCartBadgeCount(1)
        product.removeProductsFromCart()
        cy.wait(3000)
        product.verifyCartBadgeCount(0)
    })

   /* it('Remove products from cart', ()=>{
       
        product.removeProductsFromCart()
        product.verifyCartBadgeCount(0)
    })*/
})