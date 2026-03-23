describe('Validate products list', () => {
  it('should return a list of products', () => {
    cy.request('https://automationexercise.com/api/productsList').then((response) => {
      // Try parsing manually
      const parsedBody = JSON.parse(response.body);

      expect(parsedBody).to.have.property('products');
      expect(parsedBody.products).to.be.an('array').and.not.be.empty;
       // Optional: validate first product
      const firstProduct = parsedBody.products[0];
      expect(firstProduct).to.have.property('id');
      expect(firstProduct).to.have.property('name');
      expect(firstProduct).to.have.property('price');
    });
  });
});