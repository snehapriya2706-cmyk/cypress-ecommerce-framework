

describe('Handling dropdowns',()=>{
    
    
    it.skip('Dropdowns with input tag', ()=>{
        
        cy.visit("https://demo.mobiscroll.com/select/country-picker")
        cy.get('#demo155-country-picker').click()
        ///cy.get('[tabindex="0"] > :nth-child(2) > .md-country-picker-item')
        cy.get("[placeholder='Search']").type('France')
        cy.get('.mbsc-scrollview-scroll').contains('France').click()
        cy.get('#demo155-country-picker')
        .should('have.value', 'France')
         })
    
    it.skip('Auto-suggested dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type("Tamil Nadu")
        cy.get(".suggestion-title").contains('Tamil Nadu').click()
        cy.url().should('eq', "https://en.wikipedia.org/wiki/Tamil_Nadu")

    })

    it('Dynamic Dropdowns', ()=> {
        cy.visit("https://www.google.com/")
        cy.get('[title="Search"]').type('facebook login')
        cy.wait(3000)
        cy.get(".wM6W7d").should('have.length', 13)

        cy.get(".wM6W7d").each(($el, index, $list) => {
            if($el.text()=='facebook login')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('[title="Search"]').should('have.value', "facebook login")
    })
})