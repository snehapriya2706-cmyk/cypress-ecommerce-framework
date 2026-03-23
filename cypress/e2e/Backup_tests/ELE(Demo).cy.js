describe('ELE', ()=>{
    it('Login', ()=>{
        cy.visit("https://ele-qa.q.relevatetechops.com/")
        cy.get(".css-b3bili").click()
        cy.url().should('eq', "https://ele-qa.q.relevatetechops.com/login")
        cy.get(".Login_RHLogo__rU1Il").should('be.visible')
        cy.get("#email-label").should('contain', "Email address")
        cy.get("#password-label").should('contain', "Password")
        cy.get('#email').type("snehapriya.murali@swaas.net")
        cy.get('#password').type("Snehapriya0101")
        cy.get('.MuiButton-root').click()
        //cy.get('#email').clear()
        cy.get(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-slyssw").click()
        cy.get(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-slyssw").click()
        cy.get("[type='button']")

        // cy.get('.Login_FootNote__ec99s > a').invoke('removeAttr', 'target').click()  //handling child tabs in the same tab
        // cy.wait(1000)
        // cy.origin('https://www.relevatehealth.com/privacy-policy', ()=>
        //   {
        // cy.url().should('eq', 'https://www.relevatehealth.com/privacy-policy')
        // cy.url().should('not.equal', 'https://www.relevathealth.com/privacy-policy')
        //   })
        //   cy.visit('https://ele-qa.q.relevatetechops.com/login')
        //   cy.get('#email').type("snehamurali1611@gmail.com")
        // cy.get('#password').type("Annapurani02")
        // cy.get("[type='submit']").click()
        // cy.wait(2000)

        //forgot password 
        // cy.get("a[href='/login/password/forgot']").click()
        // cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.css-mg0lnc").click()
        // .type("snehapriya.murali@swaas.net")
        // cy.get("button[type='submit']").click()
        // cy.wait(1000)
        // cy.get('.swal2-confirm').click()

        //RHlogo
        // cy.get(".Login_LogoFooter__G4DMD")
        


        
        
        //Insights
        // cy.visit("https://ele-qa.q.relevatetechops.com/login")
        // cy.get('#email').type("annapurani.swaminathan@swaas.net")
        // cy.get('#password').type("Annapurani02")
        // cy.get('.MuiButton-root').click()
        // cy.wait(5000)
        cy.url().should('eq', 'https://ele-qa.q.relevatetechops.com/home')
        cy.wait(3000)

        // cy.get(':nth-child(3) > a').click()
        // cy.wait(5000)
        // cy.xpath("//div[@class='Dashboard_centerAlign__IC1Uk MuiBox-root css-0']//div[2]//div[1]//div[1]//div[1]//div[1]").click()
        // cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/ul[1]/li[18]").click()
        // cy.xpath("//body/div[@class='Dashboard_MainDiv__wUwh8']/div[@class='Dashboard_gap_24__IO6oI']/div[@class='css-el5up']/div[@class='Dashboard_centerAlign__IC1Uk MuiBox-root css-0']/div[3]/div[1]/div[1]/div[1]").click()
        // cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/div[1]/ul[1]/li[12]").click()
        // cy.xpath("//body/div[@class='Dashboard_MainDiv__wUwh8']/div[@class='Dashboard_gap_24__IO6oI']/div[@class='css-el5up']/div[@class='Dashboard_centerAlign__IC1Uk MuiBox-root css-0']/div[3]/div[1]/div[1]/div[1]").click()
        // cy.xpath("//body/div[@class='Dashboard_MainDiv__wUwh8']/div[@class='Dashboard_gap_24__IO6oI']/div[@class='css-el5up']/div[@class='Dashboard_centerAlign__IC1Uk MuiBox-root css-0']/div[4]/div[1]/div[1]/div[1]").click()
        // cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[2]/div[1]/ul[1]/li[2]").click()
        // cy.xpath("//div[@class='css-6lvq1g']").click()
        // cy.xpath("//div[@class='Dashboard_Exportloaderovelay___wCDx']").click()
        // cy.xpath("//button[normalize-space()='Close']").click()
        
        
        //validator
        
        function generateRandomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }
           
          // Function to generate a random name
          function generateRandomName() {
            return generateRandomString(6); // Adjust the length of the name as needed
          }
        
          
        
        // cy.visit("https://ele-qa.q.relevatetechops.com/login")
        // cy.get('#email').type("annapurani.swaminathan@swaas.net")
        // cy.get('#password').type("Annapurani02")
        // cy.get('.MuiButton-root').click()
        cy.xpath("//a[contains(@class,'page_subMenuItem__9gUst')][normalize-space()='Audiences']").click()
        cy.xpath("//a[normalize-space()='Validator']").click()
        cy.wait(5000)
        cy.xpath("//button[@id='validator']").click()
        cy.xpath("//body/div[@role='presentation']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1s6cfgi']/div[@class='MuiBox-root css-0']/div[@class='MuiGrid-root MuiGrid-container css-1d3bbye']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-9.6 MuiGrid-grid-md-10 MuiGrid-grid-lg-10 MuiGrid-grid-xl-10.4 css-10inq8i']/div[@class='Validator_audiencevalidatorform__BrsOT MuiBox-root css-0']/div[@class='MuiBox-root css-0']/div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 Validator_dropdowngrid__HhRyV css-18j2cjf']/div[1]/div[1]").click()
        cy.get('#\:rg\:')
        cy.xpath("//body//div[@role='presentation']//div[@class='MuiBox-root css-0']//div[@class='MuiBox-root css-0']//div[2]//div[1]//div[1]//div[1]").click()
        cy.xpath("//li[normalize-space()='Repatha']").click()
        cy.xpath("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1s6cfgi']//div[3]//div[1]//div[1]//div[1]").click()
        cy.xpath("//li[normalize-space()='Campaign']").click()
        
        cy.xpath("(//div[@role='combobox'])[4]").click()
        cy.xpath("//li[normalize-space()='23-1197_Amgen_Repatha_TPODP']").click()
        cy.get(".Validator_UploadInput__QHNQ6").click()
        cy.xpath("//input[@type='file']")
        .selectFile("C:/Users/Sneha/Desktop/Validfile4.csv")
        cy.get("input[type='checkbox']").click()
        cy.wait(5000)
       
        const randomName = generateRandomName();
        cy.get('#Audience_Name').type(randomName);


        cy.xpath("//h4[normalize-space()='File Upload']").click()
        cy.wait(10000)
        cy.xpath("//button[normalize-space()='View Results']").click()
        cy.wait(10000)

        cy.get("div[class='Validator_ButtonFlex__YJ0Xl MuiBox-root css-0'] div:nth-child(1) a:nth-child(1)").click()
        cy.xpath("//a[normalize-space()='Export to SMS template']").click()
        cy.go('back') 

    
         
        //admin-user
        cy.xpath("//a[normalize-space()='Admin']").click()

        cy.xpath("//a[normalize-space()='Users']").click()
        cy.get("[type='search']").click()
        .type("sneha")

        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[5]/a[1]").click()
        cy.wait(1000)

        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/span[1]/input[1]").click()

        cy.xpath("//button[normalize-space()='Map']").click()
        cy.wait(2000)

        cy.xpath("//button[normalize-space()='OK']")
        cy.get(".swal2-html-container").should('have.text', "Selected clients were mapped to the User!")
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
        cy.get(".css-b3bili").click() 
        
        //user creation
        
        cy.get("body > div:nth-child(16) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click()
        .type("Sneha")
        cy.get("body > div:nth-child(16) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click()
        .type("Murali")
        cy.get("body > div:nth-child(16) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click()
        .type("snehapriya.murali@swaas.net")
        cy.get("body > div:nth-child(16) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click()
        .type("Ms")
        cy.get("button[type='submit']").click()
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.css-1lwdjy3").click()

       //groups
       cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.css-gywv4a").click() 
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get('#email').type("annapurani.swaminathan@swaas.net")
        cy.get('#password').type("Annapurani02")
        cy.get('.MuiButton-root').click()
       
        cy.get("li:nth-child(4) a:nth-child(1)")
        cy.wait(3000)
       cy.xpath("//a[normalize-space()='Admin']").click()
       cy.xpath("//a[normalize-space()='Groups']").click()
       //create groups 
       cy.get('[data-testid="AddIcon"]').click()
       cy.wait(3000)
        
       
        

       
        

        cy.xpath("//div[@class='page_MobileMenu__mjxno css-15wu15a']//li[1]").contains("Amgen")
        cy.xpath('#\:r2\:').type("Amgen")
        cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get("//div[@class='MuiAutocomplete-root MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon Dashboard_dropdownFontSize__p8IZc css-18nc3u2']")
        cy.wait(5000)
        cy.xpath("//input[@id=':r8:']")
        cy.get('#\:r2\:-option-17')
        cy.get(':nth-child(1) > .css-6lvq1g')


        




        
        cy.get('.MuiButton-root').click() 


        
    })
})