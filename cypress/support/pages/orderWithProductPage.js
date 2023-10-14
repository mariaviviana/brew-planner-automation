export class OrderWithProductPage {
  constructor() {
    this.plusButtonBrew =
      'li[data-section-type="BREWHOUSE_TASK"]>span>i[title="Agregar receta"]';
    this.productName =
      'li[class="dashboard-modal-task-collapsible-content dashboard-modal-task-collapsible-content__list-header row"]>div:eq(0) >div';
    this.value = 'li[class*="dashboard-modal-task-collapsible-content"] >div[class*="dashboard-modal-task-collapsible-content__input"]>div>input';
    this.confirmProduct = 'input[name="isConfirmProduct"]';
    this.inventoryColor = 'span[data-inventory-info="enough_inventory"]';
    this.openItemList =
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i';
    this.itemOne =
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(0) >div >span';
    this.itemTwo =
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(1) >div >span';
    this.saveButton = 'button[class="dashboard-modal-content__button-save"]';
    this.publicButton =
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]';
    this.verifyCheck =
      'span[data-inventory-status-icon-state="all_discounted_confirmed"]';
    this.plusButtonBrew =
      'li[data-section-type="BREWHOUSE_TASK"]>span>i[title="Agregar receta"]';
    this.plusButtonFerm =
      'li[data-section-type="FERMENTER_TASK"]>span>i[title="Agregar receta"]';
    this.plusButtonPack =
      'li[data-section-type="PACKAGING_TASK"]>span>i[title="Agregar receta"]';
    this.amount = 'span[class="dashboard-modal-item-small__item-input"] input';
    this.buttonLess = 'span[class="material-icons toggle-icon modal-order-task-list-item__receipe is-expanded"]>i';
    
  }

  openPlusButtonBrew(pos) {
    cy.get(this.plusButtonBrew).eq(pos).click({ force: true });
  }

  verifyProduct() {
    return cy.get(this.productName);
  }

  verifyValue() {
    return cy.get(this.value);
  }

  buttonConfirm(pos) {
    cy.get(this.confirmProduct).eq(pos).click();
  }

  verifyColorInventory() {
    return cy.get(this.inventoryColor);
  }

  openItemsProduct(pos) {
    cy.get(this.openItemList).eq(pos).click({ force: true });
  }

  verifyItemOne() {
    return cy.get(this.itemOne);
  }

  verifyItemTwo() {
    return cy.get(this.itemTwo);
  }

  buttonSave() {
    cy.get(this.saveButton).click();
  }

  buttonPublic() {
    cy.get(this.publicButton).click();
  }

  verifyCheckDiscount() {
    return cy.get(this.verifyCheck);
  }

  openPlusButtonFerm() {
    cy.get(this.plusButtonFerm).eq(0).click({ force: true });
  }

  openPlusButtonPack() {
    cy.get(this.plusButtonPack).eq(0).click({ force: true });
  }

  verifyUnitsItems(pos){
    return cy.get(this.amount).eq(pos)
  }

  closeRecipe(){
    cy.get(this.buttonLess).click({ force: true });
  }
}
