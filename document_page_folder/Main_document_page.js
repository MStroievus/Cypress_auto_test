class MainDocumentArtifactPage {
    constructor() {
        this.documentURL  = 'https://uuapp-dev.plus4u.net/uu-elementarymanagement-maing01/00000f49a1c540bf9caa28b2f4082f77/document?id=643d4f8d1f0aac00282750a0'
        

        this.createdPagesList = 'span[class="uuecc-pagemanagement-1h2ruwl"]'
        this.lastCreatedPage = 'a[aria-posinset="2"]'

        this.documentDropDownList = 'button[type="button"].uuelements-10sdgj0.uuelements-15g36nw.uuelements-qbubgm:contains("Document")';





        this.createPageDocumentAction = 'a:contains("Create page")';
        this.updatePageDocumentAction = 'a:contains("Update page")';
        this.deletePageDocumentAction = 'a:contains("Delete page")';
    }

    visitDocumentArtifact() {
        cy.visit(this.documentURL);
      }

    

    clickCreatedPagesList(){
        cy.get(this.createdPagesList).click();
    }
    
    clickLastCreatedPage(){
        cy.get(this.lastCreatedPage).click();
    }








    clickDocumentDropDownList(){
        cy.get(this.documentDropDownList).click();
    }





    clickCreatePageDocumentAction() {
        cy.get(this.createPageDocumentAction).click();
    }

    clickUpdatePageDocumentAction() {
        cy.get(this.updatePageDocumentAction).click();
    }

    clickDeletePageDocumentAction() {
        cy.get(this.deletePageDocumentAction).click();
    }





}

export default MainDocumentArtifactPage;
