export class SuppliersPage {
    constructor() {
        this.buttonBurger =
        'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
        this.suppliers =
        'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
        this.closeNote='.custom-notification'
    }
  
      buttonAdmin() {
        cy.get(this.buttonBurger).click({ timeout: 1000 });
      }

      selectSuppliers() {
        cy.get(this.suppliers).eq(7).click({ force: true });
      }

      closeNotification(){
        cy.get(this.closeNote).click({ multiple: true });
      }
}