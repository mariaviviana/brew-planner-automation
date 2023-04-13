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
}
