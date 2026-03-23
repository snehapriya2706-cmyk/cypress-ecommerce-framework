/// <reference types = "Cypress" />

describe('Dropdowns', ()=>{
 it.skip('Test-1', ()=>{

    cy.visit('https://practice.expandtesting.com/dropdown')
    cy.get('#dropdown')
    .select('Option 2').should('have.value', '2')
 })

  it.skip('Test-2', ()=>{

    cy.visit('https://www.globalsqa.com/demoSite/practice/autocomplete/combobox.html')
    cy.get('.custom-combobox').type('Py')
    cy.get('.ui-menu-item div').each(($e1,index,$list)=> {

        if($e1.text()==="Python")
        {
            $e1.click()
        }
    } )
    cy.wait(3000)
    cy.get('.custom-combobox-input').should('have.value', 'Python')

  })

  it.skip('Test-3', ()=>{
    cy.visit('https://practice.cydeo.com/dropdown')
    cy.get('#state').select('District Of Columbia')
    cy.get('#state').should('have.value', 'DC')
    })

  it.skip('Test - 4', ()=>{
    cy.visit('https://practice.cydeo.com/dropdown')
    cy.get('#dropdown').select('Option 2').should('have.value', '2')
})

it('Test-5', ()=>{
    cy.visit('https://practice.cydeo.com/dropdown')
    cy.get('#dropdownMenuLink').click()
    cy.get('[href="https://www.google.com/"]').click()

    cy.origin('https://www.google.com/', ()=>
    {
        cy.url({ timeout: 1000 }).should('include', 'https://www.google.com/')
        cy.get('input.RNmpXc').should('contain', "I'm Feeling Lucky")
    })
    
    })
    
    //cy.get('.dropdown-item').select('Google')
    
    
    //each(($e1, index, $list)=>{
        //if($e1.text()==='Google')
            //{
            //$e1.click()
            //}
    //})
    
  })
 