

describe('Dropdowns', () => {
    it("Handling dropdowns", () => {
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get("#email").type('annapurani.swaminathan@swaas.net')
        cy.get("[type='password']").type('Annapurani02')
        cy.get("[type='submit']").click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.get('.css-b3bili').click()
        cy.get(':nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        //cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select')
        cy.wait(5000)
        .scrollTo('center')
        cy.get('#\:rg\:-option-2')
        })
})


