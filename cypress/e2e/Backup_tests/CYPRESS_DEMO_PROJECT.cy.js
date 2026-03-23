describe("LOGIN", ()=>{

     beforeEach(()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
     })

    it("auth - positive", ()=>{
       //logging in using valid credentials
       cy.get("#username").type("student")
       cy.get("#password").type("Password123")
       cy.get(".btn").contains("Button", 'Submit').click();


       //validating the url
       cy.url().should('eq', "https://practicetestautomation.com/logged-in-successfully/")

       //validating the text in the homepage
       cy.contains("Logged In Successfully")
       cy.contains("Congratulations student. You successfully logged in!")
       cy.get('.wp-block-button__link').should('have.text', "Log out").click()
    })
      
    it('auth-negative-01', ()=>{
        //trying to login with invalid username
        cy.get("#username").type('stud')
        cy.get("#password").type("Password123")
        cy.get('.btn').click()

        //validating error message
        cy.get('#error').should('contain', "Your username is invalid!")
    })

    it('auth-negative-02', ()=>{

        //trying to login with invalid password
        cy.get("#username").type('student')
        cy.get("#password").type("Password12")
        cy.get('.btn').click()

        //validating error message
        cy.get("#error").should('contain', "Your password is invalid!")
    })

    it("auth-negative-03", ()=>{

        //trying to login without entering username and password
        cy.get('.btn').click

        //validating error message
        cy.get("#error").should('contain', "Your username is invalid!")
    })

})


