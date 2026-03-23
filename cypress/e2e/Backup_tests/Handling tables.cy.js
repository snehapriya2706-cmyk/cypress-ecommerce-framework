describe('Handling-tables', ()=>{
    it('Tables', ()=>{
        cy.visit("https://ele-qa.q.relevatetechops.com/login")
        cy.get("#email").type('annapurani.swaminathan@swaas.net')
        cy.get("[type='password']").type('Annapurani02')
        cy.get("[type='submit']").click()

        cy.wait(5000)

        cy.xpath("//a[normalize-space()='Admin']").click()
        cy.xpath("//a[normalize-space()='Users']").click()

        cy.get("div[class='MuiDataGrid-row']").should('have.length', '19')
        cy.get("[aria-rowindex='21']").should('be.visible')
        cy.get(".MuiDataGrid-row[data-id='2']")
        cy.xpath("//body/div[@class='Admin_p_34__8K5iw Admin_mb_30__RtXk4 MuiBox-root css-0']/div[@class='css-1c2vqq4']/div[@role='grid']/div[@class='MuiDataGrid-main css-opb0c2']/div[@role='presentation']/div[@role='presentation']/div[@role='rowgroup']/div[1]/div[1]")
    })
    it('Read allthe rows and columns in the first page', ()=>{
        cy.xpath("//body//div[@class='Admin_p_34__8K5iw Admin_mb_30__RtXk4 MuiBox-root css-0']//div[@role='presentation']//div[@role='presentation']//div[@role='rowgroup']//div[1]//div[2]")
        .contains("snehapriya.murali@swaas.net")
        .each(($row, index, $rows)=>{
         cy.wrap($row).within( ()=>{
            cy.get("td").each( ($col, index, $cols) =>{ 
             cy.log($col.text());
            })
         })
        })
    })
        
    
        
    })
