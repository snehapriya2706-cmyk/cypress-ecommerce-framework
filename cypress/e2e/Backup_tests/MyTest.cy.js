
describe('MyTest', () => {
 it('test1-positive', () => {
    //cy.visit("https://opensource-demo.orangehrmlive.com/")
    //cy.title().should('eq','OrangeHRM')
    cy.visit("https://ele-qa.q.relevatetechops.com/admin/user")
    cy.get('.css-l96k6o').check().should('be.checked')
    
 })
})