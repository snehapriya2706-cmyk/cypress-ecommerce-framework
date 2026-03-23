describe('MyTestSuite', ()=>{
    
    it('DataDrivenTest', ()=>{
        
        cy.fixture('ele.json').then((data)=>{
            
            data.forEach((userdata)=>{

                 cy.visit("https://ele-qa.q.relevatetechops.com/login")
                 cy.get("#email").type(userdata.username)
                 cy.get("#password").type(userdata.password)
                 cy.get("button[type='submit']").click()

                if(userdata.username == "annapurani.swaminathan@swaas.net" && userdata.password == "Annapurani02")
                {
                    cy.get(".page_welcome_title__TkOJz")
                    .should('have.text', " Welcome to Home page ");
                    
                    cy.get('.page_RepHeadshot__9__R8 > .MuiBox-root').click()
                cy.get(".page_Admin_mobile__JI6or.page_text_base__5GrRw.page_text_underline_none__pZ_rk").click();
                
                }
                else{

                    cy.get(".Login_errorText__9otuL")
                    .should('have.text', userdata.expected);

                }
            })
        })
    })
})