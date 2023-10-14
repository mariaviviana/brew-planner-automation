export class CreateOrderDashboardPage {
  constructor() {
    this.message = '.custom-notification';
    this.dashboardPosition = 'div[class="dashboard-body"]';
    this.subModal = 'div[class="modal-order-container fluid-container"]';
    this.openBeerStyles = 'label[class="bp-textfield__label"]';
    this.listStyles = 'div[class="visible-xs row"]';
    this.selectStyle = 'li[data-menu-index= "6"]';
    this.save = 'button[data-button="save"]';
    this.viewFermenter = 'div[class*="is-fermenter"]';
    this.publicButton = '.btn-right-fixed.btn-right-upload';
    this.buttonRight = 'div[class*="react-draggable react-grid-item"]:eq(1)';
    this.editOption = 'a[class="context-menu icon"]';
    this.actionButton = 'span[style="position:relative;padding:0 16px;"]';
    this.brewConfig = 'div[tabindex="1"]';
    this.fermConfig = 'div[tabindex="2"]';
    this.packConfig = 'div[tabindex="3"]';
    this.iconConfig = 'div[class="bp-textfield is-in-use"]';
    this.closeMessage = '.custom-notification';
  }

  openModal(posx, posy) {
    cy.get(this.dashboardPosition).trigger(
      'dblclick',
      { x: posx, y: posy },
      { timeout: 3000, force: true }
    );
  }

  openMenuBeerStyles() {
    cy.get(this.subModal)
      .find(this.openBeerStyles)
      .click({ multiple: true, force: true });
  }

  selectBeerStyle() {
    cy.get(this.listStyles)
      .find(this.selectStyle)
      .click({ multiple: true, force: true });
  }

  buttonSave() {
    cy.get(this.save).contains('Guardar').click();
  }

  verifyfermenter() {
    cy.get(this.viewFermenter).rightclick();
  }

  messageConfirm() {
    return cy.get(this.message, { timeout: 1000, force: true });
  }

  buttonPublic() {
    cy.get(this.publicButton).click({
      timeout: 10000,
      force: true
    });
  }

  rightButton() {
    cy.get(this.buttonRight).rightclick({ force: true });
  }

  selectEditOption() {
    cy.get(this.editOption).first().click({ force: true });
  }

  buttonConfirmAction(action) {
    cy.get(this.actionButton).contains(action).click();
  }

  configBrew() {
    cy.get(this.brewConfig).click();
  }

  configItemBrew() {
    return cy.get(this.iconConfig).children('input[value="Fruta"]');
  }

  configFerm() {
    cy.get(this.fermConfig).click();
  }

  configItemFerm() {
    return cy.get(this.iconConfig).children('input[value="Calabaza"]');
  }

  configPack() {
    cy.get(this.packConfig).click();
  }

  configItemPack() {
    return cy.get(this.iconConfig).children('input[value="Miel"]');
  }

  saveButton() {
    cy.contains('Guardar').click();
  }

  closeNotification(){
    cy.get(this.closeMessage).each(($notificacion) => {
      cy.wrap($notificacion).click();
    });
  }
}
