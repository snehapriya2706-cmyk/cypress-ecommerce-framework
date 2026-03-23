//locators
//css locators and xpath
describe ('A1', () => {
    it('test1-positive', () => {
       cy.visit("https://ele-qa.q.relevatetechops.com/login")
       cy.get(".Login_HeaderText__3KUaa").contains('Log in to continue')
    })
    it('test2-locators', () => {
       cy.visit("https://ele-qa.q.relevatetechops.com/login")
       cy.get("#email").type('annapurani.swaminathan@swaas.net')
       cy.get("[type='password']").type('Annapurani02')
       cy.get("[type='submit']").click()
       cy.get(".page_welcome_title__TkOJz").contains('Welcome to Home page')
       cy.get(".page_subMenuItem__9gUst").contains('Audiences')
    })
   it('test3-locators-negative', () => {
      cy.visit("https://ele-qa.q.relevatetechops.com/login")
      cy.get("#email").type('annapurani.swaminathanswaas.net')
      cy.get("[type='submit']").click()
      cy.get("#email").clear()
      cy.get("#email").type('snehamurali1611@swaas.net')
      cy.get("[type='password']").type('sneha')
      cy.get("[type='submit']").click()
      })
      it('test2-locators', () => {
         cy.visit("https://ele-qa.q.relevatetechops.com/login")
         cy.get("#email").type('annapurani.swaminathan@swaas.net')
         cy.get("[type='password']").type('Annapurani02')
         cy.get("[type='submit']").click()
         cy.url().should('eq', "https://ele-qa.q.relevatetechops.com/home")
         cy.get(':nth-child(3) > a').click()
         cy.get('.infinite-scroll-component')
         cy.get(':nth-child(1) > .css-6lvq1g').click()
         cy.get('.Dashboard_Exportloaderovelay___wCDx > .MuiButtonBase-root').click()
        
      })

      })
      
