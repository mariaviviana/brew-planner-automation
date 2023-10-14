export class InventoryPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.inventory = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.itemSelect = 'tr[class="mui-table-row admin-table-row"]';
    this.adjustButton = '.form-group-button.form-group-button-icon';
    this.adjustField =
      'div[class="bp-location-adjusts-modal__fields"] > div[class="bp-location-adjusts-modal__input"]';
    this.saveButton =
      '.dashboard-modal-content.bp-custom-modal__content.inventory-transfer-modal.modal-adjust button';
    this.textFVerify =
      'tbody[class="mui-table-body admin-table-body"] tr:eq(0)';
    this.textSVerify =
      'tbody[class="mui-table-body admin-table-body"] tr:eq(1)';
  }

  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectInventory() {
    cy.get(this.inventory).eq(6).click({ force: true });
  }

  selectItem() {
    cy.get(this.itemSelect).eq(0).click();
  }

  buttonAdjust() {
    cy.get(this.adjustButton).eq(1).click({ force: true });
  }

  fieldAdjust() {
    cy.get(this.adjustField)
      .eq(1)
      .type('{selectall}{del}') // Seleccionar todo y borrar el contenido existente
      .type('1000'); // Escribir el nuevo valor en el campo de entrada
  }

  buttonSave() {
    cy.get(this.saveButton).eq(1).click();
  }

  verifyFirstText() {
    return cy.get(this.textFVerify);
  }

  verifySecondText() {
    return cy.get(this.textSVerify);
  }
}
