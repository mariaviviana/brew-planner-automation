import { LoginPage } from "../support/pages/loginPage";
import { BeerStyleAdminPage } from "../support/pages/beerStyleAdminPage";
//reference types = "cypress";
describe("Loguearse en BP", () => {
    let dataUser;
    const loginPage = new LoginPage();
    const beerStyleAdminPage = new BeerStyleAdminPage();
  
before("Asociando archivo Json",()=>{
    cy.fixture('dataLogin').then(data => {
        dataUser = data;
        })
    cy.visit("");  
    });   

it("Deberia dar de alta un estilo de cerveza", ()=>{
    const numero = Math.floor(Math.random() * 100);
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();   
    beerStyleAdminPage.buttonAdmin();
    cy.wait(1000);
    beerStyleAdminPage.selectBeerStyleAdmin();
    beerStyleAdminPage.inputNameBeerStyle(`test${numero}`);
    beerStyleAdminPage.selectColor();
    beerStyleAdminPage.buttonClick("CONFIRMA");
    beerStyleAdminPage.selectFermentingDays(14);
    beerStyleAdminPage.selectPackagingDays(5);
    beerStyleAdminPage.buttonClick("CREAR");
    beerStyleAdminPage.messageConfirm().should('have.text','El estilo de cerveza ya está disponible');
 });

 after("Eliminacion del estilo de cerveza", () => {
    beerStyleAdminPage.selectBeerStyle();
    beerStyleAdminPage.buttonClick("ELIMINAR");
    beerStyleAdminPage.alertMessage().should('have.text','Al eliminar este estilo de cerveza, se eliminarán las órdenes planificadas. ¿Desea continuar?');
    beerStyleAdminPage.buttonClick("CONFIRMAR");
    beerStyleAdminPage.messageConfirm().should('have.text','El estilo de cerveza ha sido eliminado.');
 });
})