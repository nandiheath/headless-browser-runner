describe('My First Test', () => {
  it('Open the url', () => {
    cy.visit('dontgather.vercel.app');
    cy.get('[type="text"]', {
      timeout: 10000
    }).type('Admin');
    cy.get('[type="button"]').click();
    cy.wait(500000);
  })
})