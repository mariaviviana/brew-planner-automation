import { LoginPage } from "../support/pages/loginPage";
//reference types = "cypress";
describe("Prueba de inicio de sesion en BP", () => {
    let dataUser;
    const loginPage = new LoginPage()
  
before("Asociando archivo Json",()=>{
    cy.fixture('dataLogin').then(data => {
        dataUser = data;
        })
    cy.visit("");    
    })   

it("Deberia iniciar sesion con usuario y contraseña validos y loguearse correctamente", () => {
loginPage.ingresarUser(dataUser.user);
loginPage.ingresarPass(dataUser.pass);
loginPage.botonIngresar();
cy.wait(5000);
cy.get('button[class="right-option-menu"]').click();
cy.get('[style="transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 200ms; opacity: 1;"]').should("have.text","admin-test-23")

});
})