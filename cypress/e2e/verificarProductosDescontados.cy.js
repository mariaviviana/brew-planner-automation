import { LoginPage } from '../support/pages/loginPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
import { OrderWithProductPage } from '../support/pages/orderWithProductPage';

//reference types = "cypress";
describe('Creacion de un producto', () => {
  let dataUser;
  const loginPage = new LoginPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();
  const orderWithProductPage = new OrderWithProductPage();

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

  it('Deberia dar de alta una orden combinada y verificar que tenga el producto configurado', () => {
    cy.wait(2000);
    //createOrderDashboardPage.openModal(500, 500);
    cy.get('div[class="dashboard-body"]').trigger(
      'dblclick',
      { x: 600, y: 500 },
      { timeout: 3000, force: true }
    );

    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 2000 });
    cy.wait(5000);
    //BREWING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    createOrderDashboardPage.closeNotification();
    createOrderDashboardPage.configBrew();
    orderWithProductPage.openPlusButtonBrew(0);
    orderWithProductPage.verifyProduct().should('have.text', 'super pancho ');
    orderWithProductPage.verifyValue().should('have.attr', 'value', '5');
    orderWithProductPage.buttonConfirm(0);
    orderWithProductPage
      .verifyColorInventory()
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');
    orderWithProductPage.openItemsProduct(0);
    orderWithProductPage
      .verifyItemOne()
      .should('have.text', 'pan (unidad)Cantidad');
    //Cambiar a 5
    orderWithProductPage.verifyUnitsItems(0).should('have.value', '10');
    orderWithProductPage
      .verifyItemTwo()
      .should('have.text', 'salchicha (unidad)Cantidad');
    //Cambiar a 5
    orderWithProductPage.verifyUnitsItems(1).should('have.value', '10');
    orderWithProductPage.closeRecipe();
    //open 2nd item
    orderWithProductPage.openPlusButtonBrew(1);
    orderWithProductPage.verifyProduct().should('have.text', 'super pancho ');
    orderWithProductPage.verifyValue().should('have.attr', 'value', '5');
    orderWithProductPage.buttonConfirm(1);
    orderWithProductPage
      .verifyColorInventory()
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');
    orderWithProductPage.openItemsProduct(1);
    orderWithProductPage
      .verifyItemOne()
      .should('have.text', 'pan (unidad)Cantidad');
    //Cambiar a 5
    orderWithProductPage.verifyUnitsItems(0).should('have.value', '10');
    orderWithProductPage
      .verifyItemTwo()
      .should('have.text', 'salchicha (unidad)Cantidad');
    //Cambiar a 5
    orderWithProductPage.verifyUnitsItems(1).should('have.value', '10');
    orderWithProductPage.closeRecipe();
  });
});
