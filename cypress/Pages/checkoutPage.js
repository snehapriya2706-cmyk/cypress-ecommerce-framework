class checkoutPage {
    clickCheckout(){
        cy.get('#checkout').click()
    }
    enterFirstName(firstName){
        cy.get('#first-name').type(firstName)
    }
    enterLastName(lastName){
        cy.get('#last-name').type(lastName)
    }
    enterPostalCode(postalCode){
        cy.get('#postal-code').type(postalCode)
    }
    enterContinue(){
        cy.get('#continue').click()
    }
    checkOutOverview(){
        cy.get('.cart_item').should('be.visible')
        cy.url().should('include', 'checkout-step-two')
    }
    enterFinish(){
        cy.get('#finish').click()
    }
    verifyOrderSuccess(){
        cy.contains('Thank you for your order!').should('be.visible')
    }
    enterCancel(){
        cy.get('#cancel').click()
    }
    verifyErrorMessage(){
        cy.get('.error-message-container.error').should('be.visible')
    }
}

export default checkoutPage