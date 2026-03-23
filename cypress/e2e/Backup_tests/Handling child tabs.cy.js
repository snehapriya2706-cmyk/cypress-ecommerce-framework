
describe('test1', ()=>{
 
    it('handle-tabs-approach1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('removeAttr', 'target').click();
        cy.url().should('eq', "https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        cy.go('back');
    })

    it('handle-tabs-approach2', ()=>{  ///parent and child url (domain) should be same 
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').then((e)=>{
            let url=e.prop('href');
            cy.visit(url);
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        //operations
        cy.go('back') //back to parent tab
    })

        /*cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get("#email").type('annapurani.swaminathan@swaas.net')
        cy.get("[type='password']").type('Annapurani02')
        cy.get("[type='submit']").click()
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.wait(3000)
        cy.get('[href="/audience-validator/result/803"] > .css-6lvq1g').click()
        cy.wait(5000)
        cy.url().should('include', 'https://ele-qa.q.relevatetechops.com/audience-validator/result/803')
        cy.get('[aria-rowindex="1"] > .e-templatecell').invoke('removeAttr', 'target').click();*/
        
       /* cy.visit("https://ele-qa.q.relevatetechops.com/login") //parent tab
        cy.get('.Login_FootNote__ec99s > a').invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://www.relevatehealth.com/privacy-policy')
        ///cy.wait(5000); */
        //cy.get('.e-rowcell e-templatecell e-ellipsistooltip').invoke('removeAttr', 'target').click(); //clicking on link
   
})
