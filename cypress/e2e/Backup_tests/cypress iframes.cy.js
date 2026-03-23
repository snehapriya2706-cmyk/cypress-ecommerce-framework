
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('iframes-cypress', ()=>{
    it('TC_01', ()=>{
      cy.visit('https://demo.automationtesting.in/Frames.html')
      cy.frameLoaded('#singleframe')

      cy.iframe().find("input[type='text']")
    })
})