describe("ELE", ()=>
    {
    before(function (){
        cy.fixture('ele_login_user').then(function (data) {
            this.data=data;
        });
    });
    it('Login Page', function()
    {
        
        const loginpage = new LoginPage()
        loginpage.goTo("https://ele-qa.q.relevatetechops.com/login")
        loginpage.login(this.data.username, this.data.password)
        cy.wait(1000)
        cy.contains('Welcome to Home page').should('be.visible')

        cy.get('.page_subMenu__gHfY6').contains('Audiences').click()
        cy.contains('Validator').click()
        cy.get('[role="combobox"]')
        cy.get("input[id=':r21:']").click()
        cy.get()
    })
})