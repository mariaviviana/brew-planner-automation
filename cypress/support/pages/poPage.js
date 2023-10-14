export class PoPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.po = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.selectField = 'div[class="basic-form-fields"]>div';
    this.selectSupplier =
      'div[class="bp-textfield-suggested-list"]>ul>li:eq(1)';
    this.selectDeposit = 'div[id="0"]>span';
    this.selectCommentField = '.form-group-textfield-input >input';
    this.pressButton = 'button[class*="form-group-button"]';
    this.selectPoNew = 'tbody[class*="mui-table-body"] >tr';
    this.listOfItems = '.basic-form-fields > div > div > div >input';
    this.selectItemName = '.bp-textfield-suggested-list>ul>li';
    this.fieldAmount = '.form-group-textfield-input > input';
    this.saveComment = '.basic-form-buttons >span:eq(2) >button';
    this.CreateItem = '.basic-form-buttons >div >button';
    this.keepChanges = '.basic-form-buttons >span:eq(3) >button';
    this.stateOne =
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(6)';
    this.stateTwo =
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(1) >td:eq(6)';
    this.backButton = '.basic-form-buttons >span:eq(0) >button';
    this.recieveButton = 'div[class="basic-form-buttons"] >span:eq(1)';
    this.statusOrder = 'td[class="mui-table-row-column"]';
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

  selectSuppliers() {
    cy.get(this.selectSupplier).click();
  }

  selectDepositFields() {
    cy.get(this.selectField).eq(1).click();
  }

  selectDepositName() {
    cy.get(this.selectDeposit).click();
  }

  selectCommentsField() {
    cy.get(this.selectCommentField).click();
  }

  addComments() {
    cy.get(this.selectCommentField).type('Creando orden de compra');
  }

  saveButton() {
    cy.get(this.pressButton).eq(2).click({ force: true });
  }

  selectNewPO() {
    cy.get(this.selectPoNew).eq(0).click();
  }

  selectEditButton(pos) {
    cy.get(this.pressButton).eq(pos).click();
  }

  dropDownItemsList() {
    cy.get(this.listOfItems).click().type('{downarrow}');
  }

  selectItem(pos) {
    cy.get(this.selectItemName).eq(pos).click();
  }

  selectFieldAmount() {
    cy.get(this.fieldAmount).eq(0).click();
  }

  clearFieldAmount() {
    cy.get(this.fieldAmount).eq(0).clear();
  }

  inputAmount() {
    cy.get(this.fieldAmount).eq(0).type('10');
  }

  addMoreComents(message) {
    cy.get(this.fieldAmount).eq(2).type(message);
  }

  selectSaveButton() {
    cy.get(this.saveComment).click();
  }

  SelectButtonCreate() {
    cy.get(this.CreateItem).click();
  }

  selectButtonSave() {
    cy.get(this.keepChanges).click();
  }

  selectConfirmButton() {
    cy.contains('CONFIRMAR').click();
  }

  confirmOrderOneState() {
    return cy.get(this.stateOne);
  }

  confirmOrderTwoState() {
    return cy.get(this.stateTwo);
  }

  comeInitialMenu() {
    cy.get(this.backButton).click();
  }
  selectReceiveButton() {
    cy.get(this.recieveButton).click();
  }

  showOrderStatus() {
    return cy.get(this.statusOrder).eq(6);
  }
}
