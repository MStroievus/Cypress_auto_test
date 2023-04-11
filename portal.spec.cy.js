import LoginPage from '../../support/pages/Login_page.js';
import CreateArtifactPage from '../../support/pages/Create_atifact_page.js';
import PortalPage from '../../support/pages/Portal_artifact_page.js';




describe('LoginPage_autorithation', () => {
  const loginPage = new LoginPage();
  const createArtifactPage = new CreateArtifactPage();
  const portalPage = new PortalPage

  beforeEach(() => {
    loginPage.autorithation('UserA123456', 'Authorities12345!');
  });

  it.skip('should successfully login', () => {
    cy.url().should('eq', 'https://uuapp-dev.plus4u.net/uu-businessterritory-maing01/0000037f35e04dee93c7e76de27da199/userGate/explorer?id=6433c7a53c802705a3a25405')

    cy.get('button.color-schema-blue.uu5-bricks-button.uu-bricks-1py3saz.uu5-bricks-button-m.uu5-bricks-button-filled.uu-bricks-zsiwht.uu-bricks-1scckva')
  .should('exist')
  .should('be.visible')
  .should('be.enabled')
  });

  it.skip('checking modal window for all artifacts', () => {
    createArtifactPage.clickCreateArtifatButton();

    cy.contains('Portal').should('exist');
    cy.contains('Next').should('be.visible');
  });
});

describe('Creating_artifact_Modal_Windows', () => {
  const loginPage = new LoginPage();
  const createArtifactPage = new CreateArtifactPage();

beforeEach(() => {
    loginPage.autorithation('UserA123456', 'Authorities12345!');
    createArtifactPage.clickCreateArtifatButton();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  });


it.skip ('checking modal window for all artifacts', () => {
   
    cy.contains('Portal').should('exist');
    cy.contains('Next').should('be.visible');

  });
it.skip ('checking that button  Next  is eneble', () => {

    createArtifactPage.clickPortalIcon();

    cy.contains('Portal').should('exist');
    cy.contains('Next').should('be.visible');
    cy.contains('Next').should('be.enabled')

  });

it.skip ('checking Portal modal Window', () => {

    createArtifactPage.clickPortalIcon();
    createArtifactPage.clickNextButton();

    cy.contains('Portal').should('exist');
    cy.get('input[name="name"][type="text"]').should('exist');
    cy.contains('Description').should('exist');
    cy.contains('9cda146942552ca1a3ed98f1223a635b').should('exist');
    cy.contains('Testing Users').should('exist');

  }); 
it.skip ('checking that  possible  to create  portal artifact', () => {

    createArtifactPage.clickPortalIcon();
    createArtifactPage.clickNextButton();
    createArtifactPage.generateRandomCodeForPortalsNameFields();
    createArtifactPage.clickCreatePortalButton();
    
    cy.contains('Portal').should('exist');
    cy.url().should('include', 'uu-elementarymanagement-maing01/00000f49a1c540bf9caa28b2f4082f77/portal');
  }); 


});

describe('Portal_page_managment', () => {
  const loginPage = new LoginPage();
  const portalPage = new PortalPage ();

  beforeEach(() => {
    loginPage.autorithation('UserA123456', 'Authorities12345!');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    portalPage.visitPortal();

  });

  
  
  it ('checking that  possible  to create  list', () => {
 
    portalPage.clickPortalPageButton();
    portalPage.clickPortalCreatePageButton();
    portalPage.generateRandomCodeForPortalCreatePageInputName();
    portalPage.clickPortalPageportalCreatePageButtonButton();
    cy.contains('Portal').should('exist');


  }); 
});
