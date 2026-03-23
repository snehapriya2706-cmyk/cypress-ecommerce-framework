  //  < reference types = "cypress" />

describe('Handling data tables', ()=>{
    it('TC_01', ()=>{
        cy.visit('https://practice.expandtesting.com/tables')
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes("John"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(email)
                {
                    const emailId =  email.text()
                    expect(emailId).to.equal('jsmith@gmail.com')
                })
            }

    })
    })
})

