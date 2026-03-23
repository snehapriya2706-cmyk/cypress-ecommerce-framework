class productPage{
    verifyProductList(){
        cy.get('.inventory_item').should('be.visible')
        .should('have.length', 6)
    }
    
    addProduct(productId){
    cy.get(`#add-to-cart-${productId}`).click()
}

    addProductstoCart(){
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }

    removeProductsFromCart(){
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    }

    verifyCartBadgeCount(count){
        if(count === 0){
            cy.get('.shopping_cart_badge').should('not.exist')
        }else{
            cy.get('.shopping_cart_badge').should('contain', count)
        }
    }

}

export default productPage