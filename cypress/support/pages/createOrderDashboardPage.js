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
    this.publicButton='cloud_upload';
    this.buttonRight='span[class="dashboard-icon stop-dragging filtration-icon center-icon-small text-center icon-task icon-pumpkin"]';
    this.editOption='a[class="context-menu icon"]';
    this.actionButton='span[style="position:relative;padding:0 16px;"]';
    this.brewConfig='div[tabindex="1"]';
    this.fermConfig='div[tabindex="2"]';
    this.packConfig='div[tabindex="3"]';
    this.iconConfig='div[class="bp-textfield is-in-use"]';
  }

  openModal(posx, posy) {
    cy.get(this.dashboardPosition).trigger(
      'dblclick',
      { x: posx, y: posy },
      { timeout: 2000, force: true }
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

  buttonPublic(){
    cy.contains(this.publicButton).click({
      timeout: 10000,
      force: true
    });
  }

  rightButton(){
    cy.get(this.buttonRight).rightclick({ force: true });
  }

  selectEditOption(){
    cy.get(this.editOption).first().click();
  }

  buttonConfirmAction(action){
    cy.get(this.actionButton)
      .contains(action)
      .click();
  }

  configBrew(){
    cy.get(this.brewConfig).click();
  }

  configFerm(){
    cy.get(this.fermConfig).click();
  }

  configPack(){
    cy.get(this.packConfig).click();
  }

  /*selectIconsFruit(){
    cy.get(this.iconConfig).children('input[value="Fruta"]');
  }

  selectIconsCalabaza(){
    cy.get(this.iconConfig).children('input[value="Calabaza"]');
  }

  selectIconsMiel(){
    cy.get(this.iconConfig).children('input[value="Miel"]');
  }*/

  saveButton(){
    cy.contains('Guardar').click();
  }
}
