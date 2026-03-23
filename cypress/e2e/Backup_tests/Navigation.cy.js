describe('mysuite', ()=>{

    it('Navigation', ()=>{
        
        cy.visit("https://demo.nopcommerce.com/")  
        cy.title().should('eq', "nopCommerce demo store"); //homepage

        cy.get("ul[class='top-menu notmobile'] li:nth-child(5) a:nth-child(1)").click({force: true});
        cy.wait(2000);
        cy.get("div[class='page-title'] h1").should('have.text', "Books") //books page

        cy.go('back') //back to home 
        cy.title().should('eq', "nopCommerce demo store"); //homepage

        cy.go('forward'); //books 
        cy.wait(2000);
        cy.get("div[class='page-title'] h1").should('have.text', "Books") //books page

        cy.go(-1); //homepage
        cy.title().should('eq', "nopCommerce demo store"); //homepage

        cy.go(1); //books 
        cy.wait(2000);
        cy.get("div[class='page-title'] h1").should('have.text', "Books") //books page


        cy.reload();
    })
})