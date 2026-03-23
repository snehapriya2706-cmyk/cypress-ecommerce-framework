
import 'cypress-file-upload';

describe('File upload', () => {
    it('single file', ()=>{
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get("#email").type('snehapriya.murali@swaas.net')
        cy.get("[type='password']").type('Snehapriya0101')
        cy.get("[type='submit']").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .page_subMenuItem__9gUst').click()
        cy.xpath("//a[normalize-space()='Validator']").click()
        cy.wait(5000)
        cy.get(".css-b3bili").click()
        cy.xpath("//body/div[@role='presentation']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1s6cfgi']/div[@class='MuiBox-root css-0']/div[@class='MuiGrid-root MuiGrid-container css-1d3bbye']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-9.6 MuiGrid-grid-md-10 MuiGrid-grid-lg-10 MuiGrid-grid-xl-10.4 css-10inq8i']/div[@class='Validator_audiencevalidatorform__BrsOT MuiBox-root css-0']/div[@class='MuiBox-root css-0']/div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 Validator_dropdowngrid__HhRyV css-18j2cjf']/div[1]/div[1]").click()
        cy.wait(2000)
      
        cy.xpath("//body//div[@role='presentation']//div[@class='MuiBox-root css-0']//div[@class='MuiBox-root css-0']//div[2]//div[1]//div[1]//div[1]").click()
        cy.xpath("//li[normalize-space()='Repatha']").click()
        cy.xpath("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1s6cfgi']//div[3]//div[1]//div[1]//div[1]").click()
        cy.xpath("//li[normalize-space()='Campaign']").click()
        cy.xpath("(//div[@role='combobox'])[4]").click()
        cy.xpath("//li[normalize-space()='23-1197_Amgen_Repatha_TPODP']").click()
        cy.get("[type='file']").attachFile('Empty file.csv')
        cy.get(".css-7yijl2").should('be.visible')
        .should('have.text', "File is empty")
        cy.wait(3000)
        cy.xpath("//div[@class='css-1fhw0ke']//*[name()='svg']").click()
        cy.get("[type='file']").attachFile('File other than csv.xlsx')
        cy.wait(3000)   
        cy.get(".css-7yijl2").should('be.be.visible')
        .should('have.text', "File type is unsupported. File must be .csv")

        cy.get("[type='file']").attachFile("proper npi column with npi list.csv")
        cy.get(".css-7yijl2").should('have.text', "Duplicate names in validated audience. Change audience name in field below.")
        
        cy.get("input[type='checkbox']").uncheck()

        const randomName = generateRandomName();
        cy.get('#Audience_Name').type(randomName, '{enter}')
        
        
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
             cy.get("[type='button']").should('be.visible')
             cy.wait(10000)
             
             })

})



