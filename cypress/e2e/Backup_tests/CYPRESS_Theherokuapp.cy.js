describe('UI-Elements', ()=>{

beforeEach(()=>{
     cy.visit("https://the-internet.herokuapp.com/")
})

    it('CHECKBOXES', ()=>{
        cy.get("a[href='/checkboxes']").click()
        //validating the title
        cy.get("div[class='example'] h3").should('be.visible')
        .should('have.text', "Checkboxes")
        
        //checking the checkbox 1 and unchecking checkbox 2
        cy.xpath('(//input[@type="checkbox"])[1]').check();
        cy.xpath('(//input[@type="checkbox"])[2]').uncheck();
        cy.go("back")
    })
        it('DOM-ELEMENTS', ()=>{
            cy.get("a[href='/challenging_dom']").click()
            cy.get('table thead th:nth-child(2)').should('have.text', 'Ipsum')
            cy.get('table tbody td:nth-child(3)').eq(3).should('have.text', 'Adipisci3')
            cy.get('a[href="#edit"]').eq(2).click()
            cy.url().should('eq', "https://the-internet.herokuapp.com/challenging_dom#edit")
            cy.get('a[href="#delete"]').eq(2).click()
            cy.url().should('eq', "https://the-internet.herokuapp.com/challenging_dom#delete")
        })
        it('DRAG AND DROP', ()=>{

            const dataTransfer = new DataTransfer();

            cy.get('a[href="/drag_and_drop"]').click();

            cy.get('#column-a').should('exist')
            .trigger('dragstart', { dataTransfer });
            cy.get('#column-b').should('exist')
            .trigger('drop', { dataTransfer });
            cy.get('#column-a')
            .trigger('dragend');
            cy.get('#column-b').should('have.text', 'A')
            cy.get('#column-a').should('have.text', 'B')
        })
        it('FILE-UPLOAD', ()=>{
            cy.get('a[href="/upload"]').click()
            cy.get('input#file-upload').attachFile('issue.txt')
            cy.get('input#file-upload').invoke('val')
            .should('include','issue.txt')

            cy.get("#file-submit").click()
            cy.get('.example h3').should('have.text', 'File Uploaded!')

            cy.get('#uploaded-files')
            .should('be.visible')
            .should('contain.text', ' issue.txt')
        })
        it('HANDLING DROPDOWNS', ()=>{
            cy.get('a[href="/dropdown"]').click();
            cy.get('#dropdown').select('Option 2')
            .find('option:selected')
            .should('have.text', 'Option 2')
        })

        it('DYNAMIC CONTROLS', ()=>{
            cy.get('a[href="/dynamic_controls"]').click()

            cy.get("#checkbox").should('contain.text', "A checkbox")

            cy.get('[type="button"]').contains("Remove").click()
    
            //validating progress bar
            cy.get('#loading').should('exist')
            .should('contain.text', 'Wait for it...')

            cy.contains('Button', 'Remove').should('not.exist')
            cy.get('#message').should('have.text', "It's gone!")

            //validating input field
            cy.get("input[type='text']").should('be.disabled');
            //enabling the input field
            cy.get('[type="button"]').contains("Enable").click()
             cy.get('#loading').should('exist')
            .should('contain.text', 'Wait for it...')

            cy.get("input[type='text']").should('be.enabled');
            cy.get('#message').should('contain.text', "It's enabled!")
            
            //typing into the enabled input field
            cy.get("input[type='text']").type('Hello!')
            cy.contains('button', 'Disable').click()
        })

        it.only('JQUERY-UI-MENU', ()=>{
            cy.get('a[href="/jqueryui/menu"]').click()
            cy.get('a[href="#"]').contains('Enabled').click()
            cy.get('#ui-id-4').click()
            //downloading pdf files
            cy.get('#ui-id-5').click()

            //downloading csv files
            cy.get('#ui-id-3').click({force:true})
            cy.wait(2000)
            cy.get("a[href='#']:nth-child(2)").contains('Downloads').click()
            cy.wait(2000)
            cy.get("a[href='/download/jqueryui/menu/menu.csv']").contains('CSV').click()
            
            //downloading excel files
            cy.get('#ui-id-3').click({force:true})
            cy.wait(2000)
            cy.get("a[href='#']:nth-child(2)").contains('Downloads').click()
            cy.wait(2000)
            cy.get("a[href='/download/jqueryui/menu/menu.xls']").should('contain.text', 'Excel').click()
        })
    })