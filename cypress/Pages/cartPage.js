class CartPage{

    clickCartIcon(){
        cy.get('.shopping_cart_container').click()
    }

    verifyCartPageLoaded(){
        cy.url().should('include', 'cart')
    }

    verifyProductInCart(productName){
        cy.contains('.inventory_item_name', productName)
        .should('be.visible')
    }

    verifyMultipleProducts(productNames){
        productNames.forEach((name)=>{
        cy.contains('.inventory_item_name', name)
        .should('be.visible')
     })
    }

    removeProduct(productId){
       cy.get(`#remove-${productId}`).click()
    }

    verifyCartIsEmpty(){
        cy.get('.cart_item').should('not.exist')
    }
}

export default CartPage