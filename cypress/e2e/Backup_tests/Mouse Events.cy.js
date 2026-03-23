


describe("Mouse Operations", ()=>{
  it('Mouse Hover', ()=>{
    cy.visit("https://ele-qa.q.relevatetechops.com/login")
    cy.get("#email").type('annapurani.swaminathan@swaas.net')
    cy.get("[type='password']").type('Annapurani02')
    cy.get("[type='submit']").click()
    cy.get("div[class='page_MobileMenu__mjxno css-15wu15a'] li:nth-child(1)").click()
    cy.get("div[role='presentation'] li:nth-child(1)").click()
    cy.wait(5000)
    cy.get("body > div:nth-child(14) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
    cy.wait(10000)
    cy.get("#reachacrosschannel_Series_0_Point_2").trigger('mouseover').click() 
    cy.get(':nth-child(2) > .page_subMenuItem__9gUst')

  });
  
  
  it("Mouseover", ()=>{
    cy.visit("https://www.way2automation.com/handle-mouse-hover-events-in-cypress-part-2/#")
    cy.get(".sub-menu").should('not.be.visible');
    cy.get('#menu-item-27580').trigger('mouseover').click()
    cy.get('.sub-menu').should('be.visible')
    cy.get("#menu-item-27581").should('be.visible')
    .should('have.text', "Lifetime Membership")
    cy.get('#menu-item-27582 > [href="#"]')
    .trigger('mouseover').click()
    cy.wait(5000)
});

it('right click', ()=>{
  cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
  //cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
  //cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-paste'] span")
  //.should('be.visible')
  cy.get(".context-menu-one.btn.btn-neutral").rightclick();
  cy.get('.context-menu-icon-cut').should('be.visible')
  .should('have.text', 'Cut')

})

  it("Double Click", ()=>{
    cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
    //cy.get("#box").trigger('dblclick')
    cy.get('#box').dblclick();
    cy.get("#box").should('have.text', "This is double click")
    cy.get("#box").click()
    .should('have.text', "This is single click")

  });

  it("Drag and drop using plugin", () => {
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    cy.get("#box3").should('be.visible')
    cy.get("#box101").should('be.visible')

    cy.wait(2000)

    cy.get("#box3").drag("#box101", {force:true});
   

    

  })

  it.only("Scrolling page", ()=>{
    cy.visit("https://ele-qa.q.relevatetechops.com/login")
    cy.get("#email").type('annapurani.swaminathan@swaas.net')
    cy.get("[type='password']").type('Annapurani02')
    cy.get("[type='submit']").click()
    cy.xpath("//a[normalize-space()='Admin']").click()
    cy.xpath("//a[normalize-space()='Users']").click()
    cy.wait(3000)
    cy.get("div[title='Vijayaprasad']").scrollIntoView({duration:3000});
    cy.get("div[title='Vijayaprasad']").should('be.visible')
    cy.get('[data-id="3"] > [data-field="firstName"] > .MuiDataGrid-cellContent').scrollIntoView({duration:3000})
    cy.get('[data-id="3"] > [data-field="firstName"] > .MuiDataGrid-cellContent').should('be.visible')

    cy.get('.page_FooterSession__nbqvB').scrollIntoView({duration:3000});

  })
});