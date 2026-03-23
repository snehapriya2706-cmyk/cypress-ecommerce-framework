describe("Handle Child Tab Suite", function () {

    it("Child Tab handling", function () {
        
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        cy.get('.example > a')
        
        .contains('Click Here').invoke('removeAttr', 'target').click();
       
        cy.url().should('contain',"https://the-internet.herokuapp.com/windows/new", () => 
        {
            cy.get('.example h3').should('contain', 'New Window')
        })
    })
})