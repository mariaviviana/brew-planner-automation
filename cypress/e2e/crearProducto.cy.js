import { LoginPage } from '../support/pages/loginPage';
import { ProductPage } from '../support/pages/productPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
import { OrderWithProductPage } from '../support/pages/orderWithProductPage';

//reference types = "cypress";
describe('Creacion de un producto', () => {
  let dataUser;
  let dataItem;
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();
  const orderWithProductPage = new OrderWithProductPage();

  before('Asociando archivo Json', () => {
    cy.fixture('dataLogin').then((data) => {
      dataUser = data;
      cy.fixture('dataItem').then((data) => {
        dataItem = data;
      });
    });
  });

  beforeEach('login', () => {
    cy.visit('');
    loginPage.ingresarUser(dataUser.user);
    loginPage.ingresarPass(dataUser.pass);
    loginPage.botonIngresar();
  });

  it('Deberia dar de alta un producto', () => {
    productPage.buttonAdmin();
    productPage.selectProducts();
    cy.wait(1000);
    productPage.productName(0, 'super pancho');
    productPage.selectProductField(0);
    productPage.selectBeerStyleList(5);
    productPage.selectProductField(1);
    productPage.selectBeerStyleList(8);
    productPage.productName(1, '1');
    productPage.saveButton();
    cy.wait(2000);
    productPage.selectNewProduct();
    productPage.newProductIsVisible().should('have.text', 'super pancho');
  });

  it('Deberia configurar los items del producto', () => {
    productPage.buttonAdmin();
    productPage.selectProducts();
    cy.wait(2000);
    productPage.selectNewProduct();
    productPage.buttonConfigIcons(0);
    //select icons
    productPage.selectIconsSubstract(9);
    productPage.selectIconsSubstract(26);
    productPage.selectIconsSubstract(38);
    productPage.saveIcons(1);
    productPage.buttonBack(1);
    
    //1 select subtraction items
    productPage.itemListButton();
    productPage.selectSuggestedItems(0);
    productPage.clearFieldAmount();
    productPage.clearFieldAmount();
    productPage.inputAmount();
    productPage.addButton();
    productPage.verifyItemOne(0).should('have.text', 'pan');
    productPage.verifyItemOne(1).should('have.text', '1,00 unidad');
    
    //2 select subtraction items
    productPage.itemListButton();
    productPage.selectSuggestedItems(2);
    productPage.clearFieldAmount();
    productPage.clearFieldAmount();
    productPage.inputAmount();
    productPage.addButton();
    productPage.verifyItemTwo(0).should('have.text', 'salchicha');
    productPage.verifyItemTwo(1).should('have.text', '1,00 unidad');
    productPage.selectAddItems();
    
    //select adition item
    productPage.suggestedItemAdition();
    productPage.selectSuggestedItems(1);
    productPage.clearFieldAmount();
    productPage.clearFieldAmount();
    productPage.inputAmount();
    productPage.addButton();
    cy.wait(1000);
    productPage.verifyItemOne(0).should('have.text', 'pancho');
    productPage.verifyItemOne(1).should('have.text', '1,00 unidad');
    //atras
    productPage.buttonStart(0);
  });

  it('Deberia dar de alta una orden combinada y verificar que tenga el producto configurado', () => {
    cy.wait(2000);
    createOrderDashboardPage.openModal(500, 500);
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
    orderWithProductPage
      .verifyItemTwo()
      .should('have.text', 'salchicha (unidad)Cantidad');
    orderWithProductPage.buttonSave();
    cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 1000 });
    cy.wait(5000);
    orderWithProductPage.buttonPublic();
    cy.wait(6000);
    orderWithProductPage.verifyCheckDiscount().should('exist');
    //FERMENTING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    createOrderDashboardPage.closeNotification();
    createOrderDashboardPage.configFerm();
    orderWithProductPage.openPlusButtonFerm();
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
    orderWithProductPage
      .verifyItemTwo()
      .should('have.text', 'salchicha (unidad)Cantidad');
    orderWithProductPage.buttonSave();
    cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 1500 });
    cy.wait(5000);
    orderWithProductPage.buttonPublic();
    cy.wait(7000);
    orderWithProductPage.verifyCheckDiscount().should('exist');
    //PACKAGING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    createOrderDashboardPage.closeNotification();
    createOrderDashboardPage.configPack();
    orderWithProductPage.openPlusButtonPack();
    orderWithProductPage.verifyProduct().should('have.text', 'super pancho ');
    orderWithProductPage.verifyValue().should('have.attr', 'value', '5');
    orderWithProductPage
      .verifyColorInventory()
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');
    orderWithProductPage.openItemsProduct(2);
    orderWithProductPage
      .verifyItemOne()
      .should('have.text', 'pan (unidad)Cantidadmode_edit');
    orderWithProductPage
      .verifyItemTwo()
      .should('have.text', 'salchicha (unidad)Cantidadmode_edit');
    orderWithProductPage.buttonSave();
    cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 2500 });
    cy.wait(5000);
    orderWithProductPage.buttonPublic();
    cy.wait(5000);
    orderWithProductPage.verifyCheckDiscount().should('exist');
  });
});
