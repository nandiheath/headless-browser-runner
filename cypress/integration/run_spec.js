describe('My First Test', () => {
  it('Open the url', () => {
    const url = Cypress.env('TARGET_URL');
    const runTime = Cypress.env('RUN_TIME')

    cy.visit(url);
    cy.get('[type="text"]', {
      timeout: 600000
    }).type('Admin');
    cy.get('[type="button"]').click();
    cy.wait(runTime);
  })
})