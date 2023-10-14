export class ProductPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.location = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.locationAddress = '.form-group-textfield-input input';
    this.confirmButton =
      'button[class="form-group-button form-group-button-icon primary-icon "]';
    this.selectPackDays =
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.3"] > .form-group-textfield-input > input';
    this.message = '.custom-notification';
    this.messageAlert = '[data-reactid=".0.5.0.$=10.0.1.0"] > div';
    this.inputData = 'div[class="form-group-textfield-input"]>input';
    this.selectField =
      'div[class="basic-form-fields"] >div[class="form-group form-group-textfield-suggested is-dark"]';
    this.listBeerStyle =
      'div[class="bp-textfield-suggested-list"] >ul>li[class="bp-textfield-suggested-list-item"]';
    this.buttonSave = 'button[class*="form-group-button"]';
    this.selectProduct = 'tbody[class="mui-table-body admin-table-body"]';
    this.newProduct =
      'tbody[class="mui-table-body admin-table-body"] >tr >td:eq(0)';
    this.buttonSelectIcons = '.basic-form-buttons > span > button';
    this.selectIcon = '.bp-grid-item-withfilter > div';
    this.saveSetting = 'div[class="basic-form-content pull-left"]>button';
    this.backButton = '.basic-form-buttons > span';
    this.listItems = '.bp-textfield__input';
    this.suggestedItems = '.bp-textfield-suggested-list > ul > li';
    this.selectFields = '.form-group-textfield-input > input';
    this.verifyItemFirst =
      'tbody[class="mui-table-body admin-table-body"]>tr:eq(0) >td';
    this.verifyItemSecond =
      'tbody[class="mui-table-body admin-table-body"]>tr:eq(1) >td';
    this.listAditionItem = 'div[class="bp-textfield-suggested"]';
    this.goToAditionItem = 'div[class="basic-form-buttons"]>span:eq(2)>button';
    this.startButton = 'div[class="basic-form-buttons"]>span>button';
  }

  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectProducts() {
    cy.get(this.location).eq(5).click({ force: true });
  }

  closeNotification(pos) {
    cy.get(this.message).eq(pos).click({ force: true });
  }

  productName(pos, name) {
    cy.get(this.inputData).eq(pos).clear().type(name);
  }

  selectProductField(pos) {
    cy.get(this.selectField).eq(pos).type('{downarrow}');
  }

  selectBeerStyleList(pos) {
    cy.get(this.listBeerStyle).eq(pos).click();
  }

  saveButton() {
    cy.get(this.buttonSave).click();
  }

  selectNewProduct() {
    cy.get(this.selectProduct).click();
  }

  newProductIsVisible() {
    return cy.get(this.newProduct);
  }

  buttonConfigIcons(pos) {
    cy.get(this.buttonSelectIcons).eq(pos).click();
  }

  selectIconsSubstract(pos) {
    cy.get(this.selectIcon).eq(pos).click();
  }

  saveIcons(pos) {
    cy.get(this.saveSetting).eq(pos).click();
  }

  buttonBack(pos) {
    cy.get(this.backButton).eq(pos).click();
  }

  itemListButton() {
    cy.get(this.listItems).type('{downarrow}');
  }

  selectSuggestedItems(pos) {
    cy.get(this.suggestedItems).eq(pos).click({ force: true });
  }

  clearFieldAmount() {
    cy.get(this.selectFields).clear();
  }

  inputAmount() {
    cy.get(this.selectFields).type('1', { force: true });
  }

  addButton() {
    cy.get(this.confirmButton).click();
  }

  verifyItemOne(pos) {
    return cy.get(this.verifyItemFirst).eq(pos);
  }

  verifyItemTwo(pos) {
    return cy.get(this.verifyItemSecond).eq(pos);
  }

  selectAddItems() {
    cy.get(this.goToAditionItem).click();
  }

  suggestedItemAdition(){
  cy.get(this.listAditionItem).type('{downarrow}');
  }

  buttonStart(pos){
    cy.get(this.startButton).eq(pos).click();    }
}
