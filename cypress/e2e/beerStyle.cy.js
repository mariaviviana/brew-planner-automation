import { LoginPage } from '../support/pages/loginPage';
import { BeerStyleAdminPage } from '../support/pages/beerStyleAdminPage';
//reference types = "cypress";
describe('Creacion de un estilo de cerveza', () => {
  let dataUser;
  //const numero = Math.floor(Math.random() * 100);
  //let beerName = `test${numero}`;
  const loginPage = new LoginPage();
  const beerStyleAdminPage = new BeerStyleAdminPage();

  before('Asociando archivo Json', () => {
    cy.fixture('dataLogin').then((data) => {
      dataUser = data;
    });
  });

  beforeEach('login', () => {
    cy.visit('');
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();
    beerStyleAdminPage.buttonAdmin();
    cy.wait(1000);
    beerStyleAdminPage.selectBeerStyleAdmin();
  });

  it('Deberia dar de alta un estilo de cerveza', () => {
    beerStyleAdminPage.inputNameBeerStyle('prueba');
    beerStyleAdminPage.selectColor();
    beerStyleAdminPage.buttonClick('CONFIRMA');
    beerStyleAdminPage.selectFermentingDays(14);
    beerStyleAdminPage.selectPackagingDays(5);
    beerStyleAdminPage.buttonClick('CREAR');
    cy.wait(1000);
    beerStyleAdminPage
      .messageConfirm()
      .should('have.text', 'El estilo de cerveza ya está disponible');
  });

  it('Deberia asociar iconos al estilo de cerveza', () => {
    cy.wait(1000);
    //brewing
    beerStyleAdminPage.selectBeerStyle();
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE COCCION');
    beerStyleAdminPage.buttonClick('Turnos de cocción');
    cy.wait(1000);
    beerStyleAdminPage.selectTurn();
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    beerStyleAdminPage.selectIconBrew();
    beerStyleAdminPage.selectButtonAdd();
    //beerStyleAdminPage.notification().should('have.text','El estilo de cerveza ya está disponible×');
    cy.wait(1000);
    beerStyleAdminPage.confirmTextFruit();
    beerStyleAdminPage.confirmWord('Fruta').should('have.text', 'Fruta');

    //fermenting
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE FERMENTACION');
    beerStyleAdminPage.buttonClick('Día');
    cy.wait(1000);
    beerStyleAdminPage.selectTurn();
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    beerStyleAdminPage.selectIconFerm();
    beerStyleAdminPage.selectButtonAccept();
    cy.wait(1000);
    beerStyleAdminPage.notification().should(
      'have.text',
      'El estilo de cerveza ya está disponible×'
    );
    beerStyleAdminPage.confirmIcon().should('exist');
    beerStyleAdminPage.verifyText().should('have.text', 'Calabaza');
    //packaging
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE EMPAQUETADO');
    beerStyleAdminPage.buttonClick('Día');
    cy.wait(1000);
    beerStyleAdminPage.selectTurn();
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    beerStyleAdminPage.selectIconPack();
    beerStyleAdminPage.selectButtonAccept();
    beerStyleAdminPage
      .notification()
      .should('have.text', 'El estilo de cerveza ya está disponible×');
    cy.wait(1000);
    beerStyleAdminPage.confirmTextHoney().should('exist');
    beerStyleAdminPage.confirmWord('Miel').should('have.text', 'Miel');

    beerStyleAdminPage.buttonClick('ATRAS');
    cy.wait(1000);

    beerStyleAdminPage.buttonClick('prueba');
    /*beerStyleAdminPage.buttonClick("ELIMINAR");    
    beerStyleAdminPage
      .alertMessage()
      .should(
        "have.text",
        "Al eliminar este estilo de cerveza, se eliminarán las órdenes planificadas. ¿Desea continuar?"
      );
    beerStyleAdminPage.buttonClick("CONFIRMAR");
    beerStyleAdminPage
      .messageConfirm()
      .should("have.text", "El estilo de cerveza ha sido eliminado.");*/
  });
});
