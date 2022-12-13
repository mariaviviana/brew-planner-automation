export class LoginPage{
    constructor() {
        this.inputUser = "input[type='text']";
        this.inputPass = "input[type='password']";
    };

    ingresarUser(user){
        cy.get(this.inputUser).type(user);
    };
    ingresarPass(pass){
        cy.get(this.inputPass).type(pass);
    };
    
    botonIngresar(){
        cy.contains("INGRESAR").click();
    };
    
    botonRegister(){
        cy.contains("¿Necesita una cuenta?").click();
    }
    };
