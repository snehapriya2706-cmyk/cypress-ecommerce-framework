describe('custom commands', ()=>{

    it.skip('handling links', ()=>{

        //handling links using locators 

        cy.visit("https://demo.nopcommerce.com/");

        cy.get("div[class='page-body'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        cy.get(".short-description").should('have.text', "Build it");


        //handling links using custom command 

        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch");
    })

    it.only('overwriting existing commands', ()=>{

        cy.visit("https://demo.nopcommerce.com/");

         //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");

        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch");
    })
})