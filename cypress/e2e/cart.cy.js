import CartPage from "../Pages/cartPage";
import productPage from "../Pages/ProductPage";

describe('Cart Test', ()=>{
   const cart = new CartPage()
   const product = new productPage()

   beforeEach(()=>{

     cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()    

   })

   it('Verify single product in cart', ()=>{
     product.addProductstoCart()
     cart.clickCartIcon()
     cart.verifyCartPageLoaded()
     cart.verifyProductInCart('Sauce Labs Bolt T-Shirt')
   })

   it('Remove single product from cart', ()=>{
    product.addProductstoCart()
    cart.clickCartIcon()
    cart.removeProduct('sauce-labs-bolt-t-shirt')
    cart.verifyCartIsEmpty()
   })

it('Add multiple products in cart and remove one', ()=>{

    product.addProduct('sauce-labs-backpack')
    product.addProduct('sauce-labs-fleece-jacket')
    product.addProduct('sauce-labs-onesie')

    product.verifyCartBadgeCount(3)

    cart.clickCartIcon()

    cart.verifyMultipleProducts([
        'Sauce Labs Backpack',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie'
    ])

    cart.removeProduct('sauce-labs-fleece-jacket')

    product.verifyCartBadgeCount(2)

    cart.verifyMultipleProducts([
        'Sauce Labs Backpack',
        'Sauce Labs Onesie'
    ])

  })

})