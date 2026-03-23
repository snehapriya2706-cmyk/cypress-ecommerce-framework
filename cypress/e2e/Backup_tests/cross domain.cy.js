describe('Cross domain handling', ()=> {
    it('TC_01', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el)
    {
        const url = el.prop('href')
        cy.visit(url)
        cy.origin(url, ()=>
        {
            cy.get('.navbar-nav > :nth-child(2) > a').click()
        })
    })
    })
})