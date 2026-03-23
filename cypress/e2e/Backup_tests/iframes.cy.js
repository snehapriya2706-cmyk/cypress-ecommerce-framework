import 'cypress-iframe'


describe("HANDLING IFRAMES", ()=>{
    it('iframes', ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce")
       

        const iframe=cy.get("#mce_0_ifr")
         .its('0.contentDocument.body')
         .should('be.visible')
         .then(cy.wrap);

         iframe.clear().type("welcome {ctrl+a}");
         cy.get("[title='Bold']").click();
         cy.get("[title='Italic']").click()
         cy.get("[aria-label='Align center']").click()

         cy.get(".tox-tbtn__select-chevron").click()
         cy.get(".tox-collection__group")
         cy.get("[title='Headings']").click()
         
         cy.get("[title='Heading 1']").click()
   })
    it('appproach2-by using cypress iframe plugin', ()=>{
    cy.visit("https://the-internet.herokuapp.com/tinymce");
    cy.frameLoaded('#mce_0_ifr'); ///load the frame
    cy.iframe('#mce_0_ifr').clear().type("Hello {ctrl+a}");
    cy.get("[title='Bold']").click();
    cy.get("[title='Italic']").click()
  })
  it('iframes-approach 3- by using custom command', ()=>{
    cy.visit("https://the-internet.herokuapp.com/tinymce")
    cy.getIframe('#mce_0_ifr').clear().type("Hello {ctrl+a}");
    cy.get("[title='Bold']").click();
  }) 
})