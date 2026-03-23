class LoginPage
{
    goTo(url){
         cy.visit(url)
    }
    login(username, password)
    {
        cy.get('#email').type(username)
        cy.get('#password').type(password)
        cy.contains('button', 'Log In').click()
    }
}