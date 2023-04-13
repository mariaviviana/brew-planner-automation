export class BeerStyleAdminPage {
  constructor() {
    this.buttonBurger =
      'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
    this.beerStyle =
      '//span[@class="icon-bar icon-beer-style-page-icon"]//ancestor::div[@class="app-main__side-bar-item"]';
    this.inputName = "input[id='mui-id-3']";
    this.colorBeerStyle = '.sp-replacer';
    this.selectFermDays =
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.2"] > .form-group-textfield-input > input';
    this.selectPackDays =
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.3"] > .form-group-textfield-input > input';
    this.message = '.custom-notification';
    this.messageAlert = '[data-reactid=".0.5.0.$=10.0.1.0"] > div';
    this.textHoneyVerify='i[class*="honey"]';
    this.popUpNotification="div[class='notifications-wrapper']";
    this.acceptButton='button[class="form-group-button form-group-button-icon primary-icon "]';
    this.menuIndex4='[data-menu-index="4"]';
  }

  buttonAdmin() {
    cy.get(this.buttonBurger).click({ timeout: 1000 });
  }

  selectBeerStyleAdmin() {
    cy.xpath(this.beerStyle).contains('Estilos de cerveza').click();
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
    cy.get(
      "[data-reactid='.0.1.0.0.0.$admin-scaffolding-content4.0.0.1.0.2.$=14:0.$=11:$4-1']"
    ).click();
  }

  alertMessage() {
    return cy.get(this.messageAlert);
  }

  confirmWord(word){
    return cy.contains(word);
  }

  confirmText(){
    return cy.get(this.textHoneyVerify);
  }

  notification(){
    return cy.get(this.popUpNotification);
  };

  selectButtonAccept(){
    cy.get(this.acceptButton,{ timeout: 1000 }).click({ timeout: 1000 });
  }
  
  SelectMenuIndex4(){
    cy.get(this.menuIndex4).click({ force: true });
  }
}
