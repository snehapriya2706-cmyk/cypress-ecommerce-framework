
describe('Handling Alert windows', ()=>{
 it('Simple-Alert', () => {
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#alertexamples').click()
    
    cy.on('window:alert', (t) => {
        expect(t).to.contains('I am an alert box!');
    })
    //alert window will automatically closed by cypress 
    
    cy.get(".inline-explanation").should('have.text', 'You triggered and handled the alert dialog')
 })
 
 
 it.skip('Alert-confirm', ()=>{
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#confirmexample').click()

    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a confirm alert');
    })
    //alert window will automatically closed bu cypress by using ok button 
    cy.get(".inline-explanation").should('have.text', "You clicked OK, confirm returned true.")
 }) 
 
 it('Alert-confirm', ()=>{
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#confirmexample').click()

    cy.on('window:confirm', (t)=>{
        expect(t).to.contains('I am a confirm alert');
    })
    cy.on('window:confirm', ()=> false);
    cy.get(".inline-explanation").should('have.text', "You clicked Cancel, confirm returned false.")
   })

it("Prompt-alert", ()=> {
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.window().then((win)=>{
     cy.stub(win, 'prompt').returns('welcome')
   })
   cy.get("#promptexample").click()
   //cypress will autoamatically close the prompt window using ok button 
   cy.get("#promptreturn").should('have.text', "welcome")
  })

  it.only("Authenticated alert", ()=>{
    //approach1
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
                                                                               auth:
                                                                               { 
                                                                                username: "admin", 
                                                                                password: "admin"
                                                                               }
    });
    cy.get("div[class='example'] p").should('have.contain', "Congratulations!")

    //approach2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
  })
})
