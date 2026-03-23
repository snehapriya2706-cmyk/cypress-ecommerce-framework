import LoginPage from "../Pages/loginPage.js"
describe("Login Test", () =>{
 const login = new LoginPage()

 it("Login with Valid Credentials", () =>{
    cy.fixture("user").then((data)=>{
        login.visit()
        login.enterUsername(data.username)
        login.enterPassword(data.password)
        login.clickLogin()

        cy.url().should("include", "inventory.html")
    })
 })
})


/*describe('login test', ()=>{
    it('login', ()=>{
  cy.visit('https://www.saucedemo.com/')
})
     
})*/