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
      cy.fixture('dashboardCoordinates').then((data) => {
        position = data;
        cy.visit('');
      });
    });
  });

  it('Deberia iniciar sesion con usuario y contraseña validos', () => {
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();
  });

  it('Deberia dar de alta a una orden combinada', () => {
    createOrderDashboardPage.openModal(500, 300);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    //cy.wait(1000);
    cy.contains('cloud_upload').click({ force: true, timeout: 15000 });
  });

  it('Deberia mostrar correctamente los iconos del estilo de cerveza seleccionado', () => {
    /*createOrderDashboardPage
      .messageConfirm()
      .should('have.text', 'Nueva orden guardada');*/

    /*cy.wait(1000);
    createOrderDashboardPage
      .verifyfermenter()
      .invoke('show')
      .should('be.visible');*/

    /*cy.wait(10000);
    createOrderDashboardPage
      .messageConfirm()
      .should('have.text', 'Borrador guardado automáticamente');*/

    /*cy.wait(5000);
    createOrderDashboardPage
      .messageConfirm()
      .should('have.text', 'La operación fué guardada con éxito');
    createOrderDashboardPage
      .messageConfirm()
      .should('have.text','Actualizando planificador');*/

    //cy.wait(1000);
    createOrderDashboardPage.verifyfermenter();
    /*cy.get('div[tabindex="1"]').click();
    cy.get('input[value="Calabaza"]').should('have.text', 'Calabaza');
    cy.get('div[tabindex="3"]').click();
    cy.get('input[value="Miel"]').should('have.text', 'Miel');
    cy.contains('Guardar').click(); */
  });
});
