export class ItemPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.item = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.input = '.form-group-textfield-input input';
    this.locationField = 'div[class="bp-textfield"]';
    this.createButton =
      'button[class="form-group-button form-group-button-icon primary-icon "]';
    this.confirmItem = 'tr[class="mui-table-row admin-table-row"] td:eq(1)';
    this.closeNote='.custom-notification'
  }
  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectItem() {
    cy.get(this.item).eq(3).click();
  }

  nameItem(name) {
    cy.get(this.input).eq(0).click().type(name);
  }

  selectCategory(categoria) {
    cy.contains(categoria).type('{downarrow}');
  }

  categoryName(name) {
    cy.contains(name).click();
  }

  selectUnit(name) {
    cy.get(this.input).eq(2).click().type(name);
  }

  selectLocation() {
    cy.get(this.locationField).type('{downarrow}');
  }

  locationName(name) {
    cy.contains(name).click();
  }

  buttonCreate() {
    cy.get(this.createButton).click();
  }

  verifyItem() {
    return cy.get(this.confirmItem);
  }

  closeNotification(){
    cy.get(this.closeNote).click({force: true});
  }

  
}
