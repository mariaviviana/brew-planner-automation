import { SignUpPage } from "../support/pages/signUpPage";
import { LoginPage } from "../support/pages/loginPage";
//reference types = "cypress";
describe("Registrarse en BP", () => {
    const signUpPage = new SignUpPage();
    const loginPage = new LoginPage();

    const numero = Math.floor(Math.random() * 100);
    let user = `testing${numero}`;
    let email =`elmaiten2+${numero}@gmail.com`; 
    let admin =`viviana${numero}`;
    let guest =`jero${numero}`;
  
before("Asociando archivo Json",()=>{
    cy.visit("");
    })   

it("Deberia registrar un usuario nuevo", () => {
    loginPage.botonRegister();
    signUpPage.ingresarApplicantName(user);
    signUpPage.ingresarApplicantEmail(email);
    signUpPage.ingresarAdminName(admin);
    signUpPage.ingresarPasswordAdmin("admin");
    signUpPage.ingresarGuestName(guest);
    signUpPage.ingresarPasswordGuest("admin");
    signUpPage.registerButtom();
});
/*after("Eliminacion de usuario", () => {
    cy.request({
      url: `https://pushing-it-backend.herokuapp.com/api/deleteuser/${username}`,
      method: "DELETE",
    }).then((response) => {
      expect(response.status).equal(200);
    });
});*/
})