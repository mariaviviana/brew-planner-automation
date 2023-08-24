export class PoPage {
    constructor() {
        this.buttonBurger =
        'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
        this.po =
        'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
        this.selectField = 'div[class="basic-form-fields"]>div';   
    }
  
    buttonAdmin() {
        cy.get(this.buttonBurger).click({ timeout: 1000 });
      }

      selectPO() {
        cy.get(this.po).eq(8).click({ force: true });
      }

      selectFields() {
        cy.get(this.selectField).eq(0).type('{downarrow}');
    }

}