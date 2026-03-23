describe("Assertions", () => {
    it("Implicit-Assertions", () => {
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.url().should('include', "relevatetechops.com")
        cy.url().should('eq', "https://ele-qa.q.relevatetechops.com/login")
        cy.url().should('contain', "qa")
    })
     it("Implicit", () => {
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.url().should('not.include', "relevatee")
        //.should('eq', "https://ele-qa.q.relevatetechops.com/login")
        //.should('contain', "ele")
        .and('not.eq', "https://ele-qa.d.relevatetechops.com/login")
        .and('not.contain', "elee")
        cy.get('.Login_RHLogo__rU1Il').should('be.visible') //logo
        cy.get('.Login_LogoFooter__G4DMD').should('exist')  //logo
        //cy.get('.Login_HeaderText__3KUaa').should('include', "Log in to continue")
        cy.xpath("//a").should('have.length', '4')
        cy.get('#email').type("annapurani.swaminathan@swaas.net") //providing a value into the input box
        cy.get('#email').should('have.value', 'annapurani.swaminathan@swaas.net') //checking if value is correct or not 
        
     })

     it("Explicit", () => {
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get('#email').type("annapurani.swaminathan@swaas.net")
        cy.get('#password').type("Annapurani02")
        cy.get('.MuiButton-root').click()

        let expName = " Welcome to Home page ";
        //cy.get("https://ele-qa.q.relevatetechops.com/home")
        cy.get('.page_welcome_title__TkOJz').then( (x) => {
            let actName=x.text()
            //BDD style - Behaviour Driven Development- expect keyword
            expect(actName).to.equal(expName)
            //TDD style - Test Driven Development -assert keyword
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
            cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        })
    })  
        
})