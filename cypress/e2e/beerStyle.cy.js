import { LoginPage } from '../support/pages/loginPage';
import { BeerStyleAdminPage } from '../support/pages/beerStyleAdminPage';
//reference types = "cypress";
describe('Loguearse en BP', () => {
  let dataUser;
  //const numero = Math.floor(Math.random() * 100);
  //let beerName = `test${numero}`;
  const loginPage = new LoginPage();
  const beerStyleAdminPage = new BeerStyleAdminPage();

  before('Asociando archivo Json', () => {
    cy.fixture('dataLogin').then((data) => {
      dataUser = data;
    });
    cy.visit('');
  });
  it('Deberia dar de alta un estilo de cerveza', () => {
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();
    beerStyleAdminPage.buttonAdmin();
    cy.wait(1000);
    beerStyleAdminPage.selectBeerStyleAdmin();
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
    //brewing
    beerStyleAdminPage.selectBeerStyle();
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE COCCION');
    //cy.contains('CONFIGURAR ICONOS DE COCCION').click();
    beerStyleAdminPage.buttonClick('Turnos de cocción');
    //cy.contains('Turnos de cocción').click();
    cy.wait(1000);
    cy.get(".form-group-dropdown-input div[id='0'] span").click({
      force: true
    });
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    //cy.contains('Seleccionar Icono').click();
    cy.get('[data-menu-index="2"]').click({ force: true });
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]',
      { timeout: 1000 }
    ).click();
    /*cy.get("div[class='notifications-wrapper']").should(
      'have.text',
      'El estilo de cerveza ya está disponible×'
    );*/
    cy.wait(1000);
    cy.get('i[class*="fruit"]').should('exist');
    beerStyleAdminPage.confirmWord('Fruta').should('have.text', 'Fruta');

    //fermenting
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE FERMENTACION');
    beerStyleAdminPage.buttonClick('Día');
    cy.wait(1000);
    cy.get(".form-group-dropdown-input div[id='0'] span").click({
      force: true
    });
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    cy.get('[data-menu-index="3"]').click({ force: true });
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]',
      { timeout: 1000 }
    ).click();
    cy.wait(1000);
    cy.get("div[class='notifications-wrapper']").should(
      'have.text',
      'El estilo de cerveza ya está disponible×'
    );
    cy.get('.bp-stamps > .bp-stamp').should('exist');
    cy.get(
      '[data-reactid=".0.1.0.0.0.$admin-scaffolding-content10.0.0.1.0.2.$=10:0.$=12:$0-2"]'
    ).should('have.text', 'Calabaza');

    //packaging
    beerStyleAdminPage.buttonClick('CONFIGURAR ICONOS DE EMPAQUETADO');
    beerStyleAdminPage.buttonClick('Día');
    cy.wait(1000);
    cy.get(".form-group-dropdown-input div[id='0'] span").click({
      force: true
    });
    cy.wait(1000);
    beerStyleAdminPage.buttonClick('Seleccionar Icono');
    
    cy.get('[data-menu-index="4"]').click({ force: true });
    beerStyleAdminPage.selectButtonAccept();
    beerStyleAdminPage.notification().should(
      'have.text',
      'El estilo de cerveza ya está disponible×'
    );
    cy.wait(1000);
    beerStyleAdminPage.confirmText().should('exist');
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
