describe("UTM-Bulk-Generator", ()=>{
    it("Login", ()=>{
        cy.visit("https://ele-qa.q.relevatetechops.com/")
        cy.contains('Log In').click()
        cy.get("#email").type('snehapriya.murali@swaas.net')
        cy.get("#password").type("Snehapriya0101")
        cy.contains("Log In").click()
        cy.wait(7000)
    
        //navigate to UTM-Bulk-Generate Page
        cy.get(':nth-child(2) > .page_subMenuItem__9gUst').click()
        cy.get(':nth-child(4) > .page_subMenuAdmin__JGO3G').click()
        cy.wait(5000)


        //Uploading file for first campaign in the table
        cy.get("[aria-rowindex='1'] > :nth-child(1)").click();



        // 1 - invalid file error (only .xlsx supported)
        cy.get("input[type='file']").attachFile("Empty file.csv", {subjectType: 'input', force:true});
        //verifying whether popup displayed
        cy.get('[role="dialog"]').should('contain', "Only .xlsx files are allowed." )
        cy.get('.swal2-confirm').should('be.visible');

         // 2 - verify empty file error
        cy.get("input[type='file']").attachFile("utm_bulk_sample.xlsx", {subjectType: 'input', force:true});
        cy.get('[role="dialog"]').should('contain', 'Validation process for the uploaded file. Continue?')
        .should('contain', 'This will begin the validation process for the uploaded file.')
        cy.contains('button', 'Cancel')
        cy.contains('button', 'Continue & Upload').click()
        cy.wait(5000)
        
        //validating the error (empty file)
        cy.get('[role="dialog"]').should('contain', 'The uploaded file is empty')
        .contains('button', 'OK').click();
        
        cy.wait(5000)
         //3-uploading file more than 25 MB
        cy.get("input[type='file']").attachFile("UTM_Bulk_25.xlsx", {subjectType: 'input', force:true});
        //validating the error (file size)
        cy.get('[role="dialog"]').should('contain', 'File size must be 25 MB or less.')
        .contains('button', 'OK').click();
        cy.wait(2000)

        cy.get("input[type='file']").attachFile("Mailgun_Asset.xlsx", {subjectType: 'input', force:true});
        cy.contains('button', 'Continue & Upload').click();

        //4- validating for Mailgun assets
        cy.get('[role="dialog"]').should('contain', 'Invalid Deployment platform or vendor for given medium')

    })
})
