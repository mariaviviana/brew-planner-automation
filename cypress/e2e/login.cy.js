import { LoginPage } from "../support/pages/loginPage";
//reference types = "cypress";
describe("Loguearse en BP", () => {
    let dataUser;
    const loginPage = new LoginPage()
  
before("Asociando archivo Json",()=>{
    cy.fixture('dataLogin').then(data => {
        dataUser = data;
        })
    cy.visit("");    
    })   

it("Deberia loguerse con usuario existente", () => {
loginPage.ingresarUser(dataUser.user);
loginPage.ingresarPass(dataUser.pass);
loginPage.botonIngresar();
});
})