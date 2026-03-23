describe('End to End Testing- demoblaze-site', ()=>
    {
     before(function () {
    cy.fixture('userdata').then(function (data) {
        this.data = data;  // Correct usage of `this`
    });
});
      it('Product page', function()
    {
        const itemName = "HTC One M9"
        cy.visit('https://www.demoblaze.com/')
        cy.get('div.col-md-6').should('have.length', 9)
        cy.contains('Sony vaio i5').click()
        cy.contains('Add to cart').click()
        cy.contains("Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple").should('be.visible')
        cy.go(-1)
        cy.go(-1)
        cy.get('div.col-md-6').filter(`:contains("${itemName}")`)
        .then($element =>
        {
          cy.wrap($element).should('have.length', 1)
          cy.wrap($element).click()
      
        })
        cy.get('.col-sm-12.col-md-6.col-lg-6').click()
        cy.get('a.nav-link').contains('Cart').click()
        cy.wait(3000)

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
          const text = $e1.text()
            if(text.includes("Sony"))
            {
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
              {
                const priceAmt =  price.text()
                expect(priceAmt).to.equal('790')
            })
            }
            if(text.includes("HTC"))
            {
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
              {
                const priceAmt =  price.text()
                expect(priceAmt).to.equal('700')
              })
            }
            cy.get('#totalp').then(parseInt).should('not.be.greaterThan', 1500)
    })
    cy.contains('button', 'Place Order').click()
    cy.get('#name').type(this.data.name)
    cy.get('#country').type(this.data.country)
    cy.get('#city').type(this.data.city)
    cy.get('#card').type(this.data.card)
    cy.get('#month').type(this.data.month)
    cy.scrollTo('bottom')
    cy.get('#year').type(this.data.year)
    cy.contains('Purchase').click()
    cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!')
    cy.wait(2000)
    
    cy.get('div button.btn').contains('Close').click({force: true})
    cy.get('.confirm').click()

    cy.url().should('eq', 'https://www.demoblaze.com/index.html')
    cy.get('.list-group-item').contains('Laptops').click()
    })
  })
