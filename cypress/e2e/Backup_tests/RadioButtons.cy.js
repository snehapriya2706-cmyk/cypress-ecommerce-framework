describe("RadioButton", () => {
    it("Testcase-pos", () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get("[value='red']").should('be.visible')
        cy.get("[value='yellow']").should('be.visible')
        //selecting radiobuttons
        cy.get("[value='red']").check().should('be.checked')
        cy.get("[value='red']").uncheck().should('not.be.checked')
        
    })
})