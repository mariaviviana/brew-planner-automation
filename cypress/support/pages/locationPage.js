export class LocationPage{
    constructor() {
        this.buttonBurger = 'button[style*="margin-top:8px;margin-right:8px;margin-left:-16px;"]';
        this.location = 'div[tabindex="0"]>div[class="app-main__side-bar-item"]';
        this.locationName = '.form-group-textfield-input input';
        this.locationAddress = '.form-group-textfield-input input';
        this.confirmButton = 'button[class="form-group-button form-group-button-icon primary-icon "]';
        this.selectPackDays = '[data-reactid=".0.1.0.0.0.$admin-scaffolding-header1.0.2.3"] > .form-group-textfield-input > input';
        this.message = '.custom-notification';
        this.messageAlert = '[data-reactid=".0.5.0.$=10.0.1.0"] > div';
    };
    buttonAdmin(){
        cy.get(this.buttonBurger).click({ timeout: 1000});
    };
    
    selectLocation(){
        cy.get(this.location).eq(11).click({force:true});
    };

    nameLocation(name){
        cy.get(this.locationName).eq(0).type(name);
    };

    addressLocation(address){
        cy.get(this.locationAddress).eq(1).type(address);
    };

    buttonConfirm(){
        cy.get(this.confirmButton).click();
    }
}