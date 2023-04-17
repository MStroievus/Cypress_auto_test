class CreateArtifactPage
{
    constructor() {
      this.createArtifatButton = 'span.uu5-bricks-span:contains("Create artifact")';
      this.portalIcon = 'label:contains("Portal")';
      this.nextButton = 'button[title="Next"]';
      this.documentIcon = 'label:contains("Document")';


      this.NameFields = 'input[name="name"][type="text"]';
      this.DescriptionFields = '.notranslate.public-DraftEditor-content';
      this.createButton = 'span.uu5-bricks-button-text:contains("Create")';





    }

    clickCreateArtifatButton() {
      cy.get(this.createArtifatButton).click();
    }

    clickDocumentIcon() {
      cy.get(this.documentIcon).click();
    }

    clickPortalIcon() {
      cy.get(this.portalIcon).click();
    }

    clickNextButton() {
      cy.get(this.nextButton).click();
    }
    
    clickCreateButton() {
      cy.get(this.createButton).click();
    }

    generateRandomCodeForNameFields() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let code = '';
      for (let i = 0; i < 10; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      cy.get(this.NameFields).clear().type(`test-${code}`);
      cy.get(this.DescriptionFields).clear().type(`test-${code}`);
      
    }


  }

export default CreateArtifactPage;