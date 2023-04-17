import LoginPage from '../../support/pages/Login_page.js';
import CreateArtifactPage from '../../support/pages/Create_atifact_page.js';
import MainDocumentArtifactPage from '../../support/pages/document_page_folder/Main_document_page.js';
import DocumentCreatePageModalWindow from '../../support/pages/document_page_folder/Documnet_create_page_modal_window.js';
import DocumentUpdatePageModalWindow from '../../support/pages/document_page_folder/Documnet_update_page_modal_window.js';
import DocumentDeletePageModalWindow from '../../support/pages/document_page_folder/Documnet_delete_page_modal_window.js';

describe('checking creating document artifact', () => {
    const loginPage = new LoginPage();
    const createArtifactPage = new CreateArtifactPage();
    const mainDocumentArtifactPage = new MainDocumentArtifactPage();
    const documentCreatePageModalWindow = new DocumentCreatePageModalWindow();




    beforeEach(() => {
        loginPage.autorithation('UserA123456', 'Authorities12345!');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    it.skip('should  be create document artifact with  valid data', () => {

        createArtifactPage.clickCreateArtifatButton();
        createArtifactPage.clickDocumentIcon();
        createArtifactPage.clickNextButton();
        createArtifactPage.generateRandomCodeForNameFields();
        createArtifactPage.clickCreateButton();

    });


});

describe('Cheking page managment from  document artifact', () => {
    const loginPage = new LoginPage();
    const mainDocumentArtifactPage = new MainDocumentArtifactPage();
    const documentCreatePageModalWindow = new DocumentCreatePageModalWindow();
    const documentUpdatePageModalWindow = new DocumentUpdatePageModalWindow();
    const documentDeletePageModalWindow = new DocumentDeletePageModalWindow();






    beforeEach(() => {
        loginPage.autorithation('UserA123456', 'Authorities12345!');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    it.skip('should  be create document  page  with  valid data', () => {

        mainDocumentArtifactPage.visitDocumentArtifact();
        mainDocumentArtifactPage.clickDocumentDropDownList();
        mainDocumentArtifactPage.clickCreatePageDocumentButton();
        documentCreatePageModalWindow.addRandomTextToNameInput(24);
        documentCreatePageModalWindow.clickCreateButton();


    });


    it.skip('should  be update document  page  with  valid data', () => {

        mainDocumentArtifactPage.visitDocumentArtifact();
        mainDocumentArtifactPage.clickDocumentDropDownList();
        mainDocumentArtifactPage.clickUpdatePageDocumentAction();
        documentUpdatePageModalWindow.addRandomTextToNameInput(11);
        documentUpdatePageModalWindow.clickSetstateButton();

    });

    it.skip('should  be update document  page  with  invalid data more  that 200 chapters', () => {

        mainDocumentArtifactPage.visitDocumentArtifact();
        mainDocumentArtifactPage.clickDocumentDropDownList();
        mainDocumentArtifactPage.clickUpdatePageDocumentAction();
        documentUpdatePageModalWindow.addRandomTextToNameInput(201);
        documentUpdatePageModalWindow.clickSetstateButton();

        cy.contains('Text has to contain maximum of 200 characters.').should('exist');

    });

    it('should  be delete  document  page  with  valid data', () => {

        mainDocumentArtifactPage.visitDocumentArtifact();
        mainDocumentArtifactPage.clickCreatedPagesList();
        cy.get('[aria-posinset="2"]').should('have.attr', 'aria-posinset', '2');

        mainDocumentArtifactPage.clickLastCreatedPage();
        cy.wait (300)

        mainDocumentArtifactPage.clickDocumentDropDownList();
        mainDocumentArtifactPage.clickDeletePageDocumentAction();
        documentDeletePageModalWindow.clickDeleteButton();



    });

    it.skip('should  be impossible to delete  main page  from document artifact', () => {

        mainDocumentArtifactPage.visitDocumentArtifact();
        mainDocumentArtifactPage.clickCreatedPagesList()
        cy.get('[aria-posinset="2"]').should('have.attr', 'aria-posinset', '2');

        mainDocumentArtifactPage.clickDocumentDropDownList();
        mainDocumentArtifactPage.clickDeletePageDocumentAction();
        documentDeletePageModalWindow.clickDeleteButton();



    });

});