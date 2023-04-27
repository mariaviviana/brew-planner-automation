export class ProductPage{
    constructor() {
        this.buttonBurger = 'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
        this.location = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
        this.closeMessage = '.custom-notification';
        this.locationAddress = '.form-group-textfield-input input';
        this.confirmButton = 'button[class="form-group-button form-group-button-icon primary-icon "]';
        this.selectPackDays = '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.3"] > .form-group-textfield-input > input';
        this.message = '.custom-notification';
        this.messageAlert = '[data-reactid=".0.5.0.$=10.0.1.0"] > div';
    };
    buttonAdmin(){
        cy.get(this.buttonBurger).click({ timeout: 1000});
    };

    selectProducts(){
        cy.get(this.location).eq(5).click({force:true});
    };

    closeNotification(pos){
        cy.get(this.closeMessage).eq(pos).click({force: true});
      };
}