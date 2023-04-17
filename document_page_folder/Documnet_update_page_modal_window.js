class DocumentUpdatePageModalWindow {

    constructor() {
        
        this.nameinput = 'input.uuelements-1vd42w9.uuelements-6jbxjp.uuelements-1jl440a.uuelements-11io91h[name="name"][type="text"][required]';
        this.setstateButton = 'button.uuelements-10sdgj0.uuelements-c3sdc8[type="button"][aria-pressed="false"]';
        


}


clickSetstateButton(){
    cy.get(this.setstateButton).click();
}


addRandomTextToNameInput(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
    for (let i = 0; i < length; i++) {
        randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    cy.get(this.nameinput).clear().type(`test text for name - ${randomText}`);
}
}

export default DocumentUpdatePageModalWindow;
