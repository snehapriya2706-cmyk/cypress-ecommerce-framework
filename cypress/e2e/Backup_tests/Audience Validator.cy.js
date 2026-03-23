describe('Audience Validator', ()=>{
    it('Login screen', ()=>{
        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get(".Login_RHLogo__rU1Il").should('be.visible') // verifying if logo is visible or not
        cy.get(".Login_HeaderText__3KUaa").should('have.text', "Log in to continue")
        cy.get("#email").should('be.visible')
        cy.get("#password").should('be.visible')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').should('have.text', "SHOW")
        cy.get("#password").type('Annapurani02')
        .should('not.have.text', 'Annapurani02')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get("#password").should('have.value', 'Annapurani02')
        cy.get("#password").clear()
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        //cy.get('.MuiButton-root').should('have.text', 'Logging in..'),({force:true})
        
        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get("#email").type("annapurani.swaminathanswaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        cy.get('.Login_errorText__9otuL').should('have.text', "Please enter a valid email")

        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani01")
        cy.get('.MuiButton-root').click()
        cy.get('.Login_errorText__9otuL').should('have.text', "Login Failed: Please check your credentials or try again later")

        cy.get("[type='submit']").should('be.visible')

        cy.get("#email").clear()
        cy.get("[type='submit']").click()
        cy.get('.Login_errorText__9otuL').should('have.text', "Please enter your email")

        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get('.MuiButton-root').click()

        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        cy.wait(3000)

        cy.get(".page_welcome_title__TkOJz").should('have.text', " Welcome to Home page ")
        cy.wait(3000)
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()

        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.wait(3000)
        cy.url().should('eq', "https://ele-qa.q.relevatetechops.com/audience-validator")

        cy.get('.page_RepHeadshot__9__R8 > .MuiBox-root').should('be.visible')
        cy.get("div[class='page_RepHeadshot__9__R8 page_pointer__PZsFn css-1viar69'] div[class='MuiBox-root css-0']").should('have.text', "AS")
        //cy.get("div[class='page_nowrap__x1NRH MuiBox-root css-0']").should('have.text', "Annapurani  Swaminathan")
        cy.get('.page_RepHeadshot__9__R8 > .MuiBox-root').click()
        /*cy.get('.page_RepHeadshot__9__R8 > .MuiBox-root')
        .find('options')
        .then(options => {
        const actualTexts = [...options].map(option => option.text);
        const expectedTexts = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
        expect(actualTexts).to.deep.eq(expectedTexts);  });*/
        cy.get('.page_Admin_mobile__JI6or').should('have.text', "Logout").click()
        cy.wait(2000)
        
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        cy.wait(2000)
        cy.get('.page_nav__zpG_3').should('be.visible')
        //cy.get('.page_RHLogo__V0UBQ').should('be.visible') //ele logo

        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.get(".css-13s6glp").should('have.text', "Audiences")
        
        cy.get('.css-1lu5zq6').should('have.text', "All Audiences")
        
        cy.visit('https://ele-qa.q.relevatetechops.com/login') //user logged in for the first time
        cy.get("#email").type("mohankumar@swaas.net")
        cy.get("#password").type("Relevatehealth@123")
        cy.get('.MuiButton-root').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.get('.css-1aclx75').should('have.text', 'No Audience Found')
    })
     it.only("dropdown", ()=>{
        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get("#email").type("annapurani.swaminathan@swaas.net")
        cy.get("#password").type("Annapurani02")
        cy.get('.MuiButton-root').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.get('[tabindex="0"] > .page_subMenuAdmin__JGO3G').click()
        cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click()
        .wait(5000)
        .type("Amgen")
        cy.get("[role='presentation']").click()
        cy.wait(2000)
        cy.get("[role='combobox']").should('have.value', "Amgen")
        cy.wait(3000)
        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type("Repatha")
        cy.wait(2000)
        cy.get("[role='presentation']").click()
        cy.get("[role='combobox']").should('have.value', "Amgen")
        cy.get('.css-11x1rvj').click()
        cy.wait(2000)
        cy.get('[role="combobox"]').should('be.empty')

        cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click()
        .wait(5000)
        .type("Amgen")
        cy.get("[role='presentation']").click()
        cy.wait(2000)
        cy.get("[role='combobox']").should('have.value', "Amgen")
        cy.get('.MuiAutocomplete-clearIndicator').click()
     });
    })