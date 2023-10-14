export class SuppliersPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.suppliers = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.closeNote = '.custom-notification';
    this.data = '.form-group-textfield-input >input';
    this.buttonAdd =
      'button[class="form-group-button form-group-button-icon primary-icon "]';
    this.list = 'tbody[class*="mui-table-body"]';
    this.supplierSelect =
      'tbody[class="mui-table-body admin-table-body"]>tr:eq(0)';
    this.addDataContact = '.basic-form-buttons >span >button';
    this.inputContactData = '.basic-form-fields >div';
    this.deployList = '.form-group-dropdown-input > div';
    this.selectContact = 'div.form-group-dropdown-input > div > div#1';
    this.suggestedItems = '.bp-textfield-suggested >div >label';
    this.selectItem = '.bp-textfield-suggested-list >ul >li';
    this.buttonBack = 'button[class*="form-group-button"]';
  }

  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectSuppliers() {
    cy.get(this.suppliers).eq(7).click({ force: true });
  }

  closeNotification() {
    cy.get(this.closeNote).click({ multiple: true });
  }

  supplierData(pos, date) {
    cy.get(this.data).eq(pos).type(date);
  }

  addButton() {
    cy.get(this.buttonAdd).click();
  }

  shouldBeList() {
    return cy.get(this.list);
  }

  shouldBeListB() {
    return cy.get(this.list) > tr.eq(1);
  }

  selectSupplier() {
    cy.get(this.supplierSelect).click();
  }

  addDataButton(pos) {
    cy.get(this.addDataContact).eq(pos).click();
  }

  inputAddressData(pos, date) {
    cy.get(this.data).eq(pos).clear({ force: true }).type(date);
  }

  addContactName(name) {
    cy.get(this.inputContactData).eq(0).type(name);
  }

  deployContactList() {
    cy.get(this.deployList).eq(0).click();
  }

  selectContactName() {
    cy.get(this.selectContact).click();
  }

  addEmail(email) {
    cy.get(this.inputContactData).eq(2).click().type(email);
  }

  deployItemsList() {
    cy.get(this.suggestedItems).type('{downarrow}');
  }

  deployItemsList() {
    cy.get(this.suggestedItems).type('{downarrow}');
  }

  selectItems(pos) {
    cy.get(this.selectItem).eq(pos).click();
  }

  selectField(pos) {
    cy.get(this.data).eq(pos).click();
  }

  inputItemInfo(pos, number) {
    cy.get(this.data).eq(pos).type(number);
  }

  showItem(pos) {
    return cy.get(this.data).eq(pos);
  }

  selectBackButton() {
    cy.get('button[class*="form-group-button"]').eq(0).click();
  }
}
