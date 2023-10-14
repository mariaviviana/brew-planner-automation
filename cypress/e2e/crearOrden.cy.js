import { LoginPage } from '../support/pages/loginPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
//reference types = "cypress";
describe('Creacion de orden combinada', () => {
  let dataUser;
  const loginPage = new LoginPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();

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
  });

  it('Deberia dar de alta a una orden combinada y eliminarla', () => {
    createOrderDashboardPage.openModal(500, 300);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    cy.wait(8000);
    //createOrderDashboardPage.buttonPublic();
    //cy.wait(5000);
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    createOrderDashboardPage.buttonConfirmAction('Eliminar');
    createOrderDashboardPage.buttonConfirmAction('CONFIRMAR');
    cy.wait(12000);
    createOrderDashboardPage.buttonPublic();
  });

  it('Deberia dar de alta una orden combinada y mostrar correctamente los iconos del estilo de cerveza seleccionado', () => {
    cy.wait(5000);
    createOrderDashboardPage.openModal(500, 300);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    //cy.wait(10000);
    //createOrderDashboardPage.buttonPublic();
    cy.wait(5000);
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    createOrderDashboardPage.configBrew();
    cy.wait(1000);
    createOrderDashboardPage.configItemBrew().should('exist');
    createOrderDashboardPage.configFerm();
    cy.wait(1000);
    createOrderDashboardPage.configItemFerm().should('exist');
    createOrderDashboardPage.configPack();
    cy.wait(1000);
    createOrderDashboardPage.configItemPack().should('exist');
    createOrderDashboardPage.saveButton();
  });
});
