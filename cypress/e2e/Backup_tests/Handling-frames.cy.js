describe('Handling frames', ()=>{
    it('frames-approach1', ()=> {
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        
        const iframe=cy.get("#mce_0_ifr")
        its('0.contentDocument.body')

    })
    
})