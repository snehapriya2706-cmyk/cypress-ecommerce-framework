describe('My suite', ()=>
    {
      it('Capture Screenshots&Videos', ()=>
    {
        cy.visit('https://ele-qa.q.relevatetechops.com/home')
        cy.get("#email").type('annapurani.swaminathan@swaas.net')
        cy.get("[type='password']").type('Annapurani02')
        cy.get("[type='submit']").click()
        cy.wait(5000)
        /*cy.screenshot('homepage');
        cy.wait(5000)
        cy.get("img[alt='logo']").screenshot("logo");*/
        

        
    })
    })