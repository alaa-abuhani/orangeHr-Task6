import login from "../../support/PageObject/login";
import * as XLSX from "xlsx";
import { writeFileSync } from "fs";
import * as path from "path";
import bussPag from "../../support/PageObject/bussPage";

const loginObj: login = new login();
const bussPagObj: bussPag = new bussPag();

describe("buzz functionality ", () => {
  beforeEach(() => {
    cy.intercept("/web/index.php/dashboard/index").as("loginpage");
    cy.visit("/");
    cy.fixture("login.json").as("logininfo");
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginValid(logininfo[0].Username, logininfo[0].Password);
      cy.writeFile(
        "cypress/fixtures/post-data.txt",
        " ++++HELlO WORLD FROME CYPRESS+++ "
      );
    });
  });

  afterEach(() => {});

  it("buzz: add post from fixture file ", () => {
    cy.fixture("post-data.txt").then((data) => {
      bussPagObj.bussTab();
      bussPagObj.bussInput(data);
      bussPagObj.btnPost();
      bussPagObj.assertionPost(data);
    });
  });
});
