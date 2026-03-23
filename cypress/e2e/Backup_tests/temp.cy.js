describe("ELE", ()=>
    
        {
            before(function (){
                cy.fixture('ele_login_user').then(function (data) {
                    this.data=data;
                });
            });
        it('sample', function()
            {
        cy.visit('https://ele-qa.q.relevatetechops.com/login')
        cy.get('#email').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.contains('button', 'Log In').click()
        cy.wait(2000)
        cy.get('li.page_subMenu__gHfY6').contains('Campaigns').click()
        cy.contains('UTM Generator').click()
        cy.wait(2000)
        cy.get("input[id=':r2b:']").click()
        //cy.get()
    })
})