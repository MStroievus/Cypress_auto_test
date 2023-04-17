class DocumentDeletePageModalWindow {

    constructor() {
        
        this.deleteButton = 'button:contains("Delete")'

}

    clickDeleteButton(){
        cy.get(this.deleteButton).click();
    }
}

export default DocumentDeletePageModalWindow;
