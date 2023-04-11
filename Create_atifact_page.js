class CreateArtifactPage
{
    constructor() {
      this.createArtifatButton = 'span.uu5-bricks-span:contains("Create artifact")';
      this.portalIcon = 'label:contains("Portal")';
      this.nextButton = 'button[title="Next"]';

      this.portalsNameFields = 'input[name="name"][type="text"]';
      this.portalsDescriptionFields = '.notranslate.public-DraftEditor-content';
      this.createPortalButton = 'span.uu5-bricks-button-text:contains("Create")';





    }

    clickCreateArtifatButton () {
      cy.get(this.createArtifatButton).click();
    }

    clickPortalIcon () {
      cy.get(this.portalIcon).click();
    }

    clickNextButton() {
      cy.get(this.nextButton).click();
    }
    
    clickCreatePortalButton() {
      cy.get(this.createPortalButton).click();
    }

    generateRandomCodeForPortalsNameFields() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let code = '';
      for (let i = 0; i < 10; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      cy.get(this.portalsNameFields).clear().type(`test-${code}`);
      cy.get(this.portalsDescriptionFields).clear().type(`test-${code}`);
      
    }


  }

export default CreateArtifactPage;