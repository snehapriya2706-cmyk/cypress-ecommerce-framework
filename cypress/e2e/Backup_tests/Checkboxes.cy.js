describe('checkboxes', () => {
    it("test1-pos", () => {
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        cy.get(':nth-child(4) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.get('[data-id="3"] > [data-field="Action"] > .Admin_hyperLink__J_JuA').click()
        cy.get("[type='checkbox']").check().should('be.checked')
        cy.get('[aria-label="Go to next page"]').click()
        cy.get("[type='checkbox']").check().should('be.checked')
        cy.get('[data-id="37"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck()
        cy.get('[data-id="37"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').should('not.be.checked')
        cy.get('.css-l96k6o').click()
        cy.get('.swal2-confirm').click()
      
  })  
})
