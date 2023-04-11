class PortalPage {
    constructor() {

        this.portalPageButton = 'button[type="button"].uuelements-10sdgj0.uuelements-15g36nw.uuelements-qbubgm:contains("Portal")';
        this.portalURLs= "https://uuapp-dev.plus4u.net/uu-elementarymanagement-maing01/00000f49a1c540bf9caa28b2f4082f77/portal?id=643494651f0aac002826a952"
        this.portalCreatePageButton = 'a.uuelements-ytumd6.uuelements-rriwma.uuelements-t51bl9.uuelements-19matf3.uuelements-16jjjof:contains("Create page")';
        this.portalCreatePageInputName = 'input[name="name"].uuelements-1vd42w9.uuelements-6jbxjp.uuelements-1jl440a.uuelements-11io91h';
        this.portalPageportalCreatePageButtonButton = 'button.uuelements-10sdgj0.uuelements-c3sdc8[type="button"][aria-pressed="false"]';;

    }
    clickPortalCreatePageButton() {
        cy.get(this.portalCreatePageButton).click();
    }

    clickPortalPageportalCreatePageButtonButton() {
        cy.get(this.portalPageportalCreatePageButtonButton).click();
    }

    clickPortalPageButton() {
        cy.get(this.portalPageButton).click();
      }
    visitPortal() {
        cy.visit(this.portalURLs);
      }
    generateRandomCodeForPortalCreatePageInputName() {
        const randomString = Math.random().toString(36).substring(2, 19);
        cy.get(this.portalCreatePageInputName).clear().type(`test-${randomString}`);
      }  
}
export default PortalPage;