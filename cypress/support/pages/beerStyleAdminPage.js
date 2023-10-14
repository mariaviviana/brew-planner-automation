export class BeerStyleAdminPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.beerStyle = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
    this.inputName = "input[id='mui-id-3']";
    this.colorBeerStyle = '.sp-replacer';
    this.selectFermDays =
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.2"] > .form-group-textfield-input > input';
    this.selectPackDays =
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.3"] > .form-group-textfield-input > input';
    this.message = '.custom-notification';
    this.selectBeer = 'tbody[class="mui-table-body admin-table-body"] tr:eq(4)';
    this.brewTurn = ".form-group-dropdown-input div[id='0'] span";
    this.brewIconSelect = '[data-menu-index="2"]';
    this.fermIconSelect = '[data-menu-index="3"]';
    this.packIconSelect = '[data-menu-index="4"]';
    this.messageAlert = '[data-reactid=".0.5.0.$=10.0.1.0"] > div';
    this.textHoneyVerify = 'i[class*="honey"]';
    this.textFruitVerify = 'i[class*="fruit"]';
    this.textVerify = 'tbody >tr >td:eq(1)';
    this.popUpNotification = "div[class='notifications-wrapper']";
    this.acceptButton =
      'button[class="form-group-button form-group-button-icon primary-icon "]';
    this.menuIndex4 = '[data-menu-index="4"]';
    this.iconVisible = '.bp-stamps > .bp-stamp';
  }

  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectBeerStyleAdmin() {
    cy.get(this.beerStyle).eq(2).click({ force: true });
  }

  inputNameBeerStyle(name) {
    cy.get(this.inputName).type(name);
  }

  selectColor() {
    cy.get(this.colorBeerStyle).click();
  }

  buttonClick(name) {
    cy.contains(name).click();
  }

  selectFermentingDays(number) {
    cy.get(this.selectFermDays).type(number);
  }

  selectPackagingDays(number) {
    cy.get(this.selectPackDays).type(number);
  }

  messageConfirm() {
    return cy.get(this.message, { timeout: 9000 });
  }

  selectBeerStyle() {
    cy.get(this.selectBeer).click();
  }

  alertMessage() {
    return cy.get(this.messageAlert);
  }

  confirmWord(word) {
    return cy.contains(word);
  }

  selectTurn() {
    cy.get(this.brewTurn).click({ force: true });
  }

  selectIconBrew() {
    cy.get(this.brewIconSelect).click({ force: true });
  }

  selectIconFerm() {
    cy.get(this.fermIconSelect).click({ force: true });
  }

  selectIconPack() {
    cy.get(this.packIconSelect).click({ force: true });
  }

  selectButtonAdd() {
    cy.get(this.acceptButton, { timeout: 1000 }).click();
  }

  confirmTextFruit() {
    return cy.get(this.textFruitVerify);
  }

  confirmTextHoney() {
    return cy.get(this.textHoneyVerify);
  }

  verifyText() {
    return cy.get(this.textVerify);
  }

  confirmIcon() {
    return cy.get(this.iconVisible);
  }

  notification() {
    return cy.get(this.popUpNotification);
  }

  selectButtonAccept() {
    cy.get(this.acceptButton, { timeout: 1000 }).click({ timeout: 1000 });
  }

  SelectMenuIndex4() {
    cy.get(this.menuIndex4).click({ force: true });
  }
}
