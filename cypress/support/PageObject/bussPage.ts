export default class bussPag {
  bussTab() {
    cy.visit("/buzz/viewBuzz");
  }

  bussInput(data: any) {
    cy.get(".oxd-buzz-post-input").type(data);
  }

  btnPost() {
    cy.get(".oxd-buzz-post-slot > .oxd-button").click({ force: true });
    cy.wait(1000);
  }
  assertionPost(data: any) {
    cy.get(".orangehrm-buzz-newsfeed").should("contain", data);
  }
}
