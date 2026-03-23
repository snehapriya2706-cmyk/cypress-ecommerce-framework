describe('User List Page', () => {
  it('should load and display mocked users', () => {
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'Snehapriya Murali' },
        { id: 2, name: 'John Doe' }
      ]
    }).as('getUsers');

    cy.visit('http://localhost:3000/user-list');

    cy.wait('@getUsers');

    // Assert that user names are displayed on the page
    cy.contains('Snehapriya Murali').should('be.visible');
    cy.contains('John Doe').should('be.visible');
  });
});