import { LoginPage } from '../support/pages/loginPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
//reference types = "cypress";
describe('Prueba de inicio de sesion en BP', () => {
  let dataUser;
  const loginPage = new LoginPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();

  before('Asociando archivo Json', () => {
    cy.fixture('dataLogin').then((data) => {
      dataUser = data;
    });
    cy.visit('');
  });

  it('Deberia iniciar sesion con usuario y contraseña validos', () => {
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();
  });

  it('Deberia dar de alta a una orden combinada y eliminarla', () => {
    createOrderDashboardPage.openModal(500, 300);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    cy.wait(10000);
    cy.contains('cloud_upload').click({
      timeout: 10000,
      force: true
    });
    cy.wait(5000);
    cy.get(
      'span[class="dashboard-icon stop-dragging icon-task filtration-icon center-icon-small text-center icon-task icon-pumpkin icon-pumpkin"]'
    ).should('exist');
    cy.wait(5000);
    cy.get(
      'span[class="dashboard-icon stop-dragging icon-task filtration-icon center-icon-small text-center icon-task icon-pumpkin icon-pumpkin"]'
    ).rightclick({ force: true });
    cy.get('a[class="context-menu icon"]').first().click();
    cy.get('span[style="position:relative;padding:0 16px;"]')
      .contains('Eliminar')
      .click();
    cy.get('span[style="position:relative;padding:0 16px;"]')
      .contains('CONFIRMAR')
      .click();
    cy.wait(10000);
    cy.contains('cloud_upload').click({
      timeout: 10000,
      force: true
    });
  });

  it('Deberia dar de alta una orden combinada y mostrar correctamente los iconos del estilo de cerveza seleccionado', () => {
    cy.wait(7000);
    createOrderDashboardPage.openModal(500, 300);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    cy.wait(10000);
    cy.contains('cloud_upload', { timeout: 10000 }).click({ force: true });
    cy.wait(5000);
    cy.get(
      'span[class="dashboard-icon stop-dragging icon-task filtration-icon center-icon-small text-center icon-task icon-pumpkin icon-pumpkin"]'
    ).rightclick({ force: true });
    cy.get('a[class="context-menu icon"]').first().click();
    cy.get('div[tabindex="1"]').click();
    cy.wait(1000);
    cy.get('div[class="bp-textfield is-in-use"]')
      .children('input[value="Fruta"]')
      .should('exist');
    cy.get('div[tabindex="2"]').click();
    cy.wait(1000);
    cy.get('div[class="bp-textfield is-in-use"]')
      .children('input[value="Calabaza"]')
      .should('exist');
    cy.get('div[tabindex="3"]').click();
    cy.wait(1000);
    cy.get('div[class="bp-textfield is-in-use"]')
      .children('input[value="Miel"]')
      .should('exist');
    cy.contains('Guardar').click();
  });
});
