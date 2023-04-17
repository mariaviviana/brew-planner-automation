import { LoginPage } from '../support/pages/loginPage';
import { LocationPage } from '../support/pages/locationPage';
import { ItemPage } from '../support/pages/itemPage';
import { InventoryPage } from '../support/pages/inventoryPage';
//reference types = "cypress";
describe('Prueba de inicio de sesion en BP', () => {
  let dataUser;
  let dataItem;
  const loginPage = new LoginPage();
  const locationPage = new LocationPage();
  const itemPage = new ItemPage();
  const inventoryPage = new InventoryPage();

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

  it('Deberia dar de alta los depósitos', () => {
    cy.wait(1000);
    locationPage.buttonAdmin();
    locationPage.selectLocation();
    cy.wait(1000);
    locationPage.nameLocation('Deposito Venecia');
    locationPage.addressLocation('Venecia135');
    locationPage.buttonConfirm();
    cy.wait(1000);
    cy.contains('Deposito Venecia').should('exist');
  });

  it('Deberia dar de alta items', () => {
    cy.wait(1000);
    itemPage.buttonAdmin();
    itemPage.selectItem();
    cy.wait(1000);
    itemPage.nameItem(dataItem.primerItem);
    itemPage.selectCategory('Categoría');
    itemPage.categoryName('Aditivos');
    //cy.get('.form-group-textfield-input input').eq(1).click();
    itemPage.selectUnit('unidad');
    itemPage.selectLocation();
    itemPage.locationName('Deposito Venecia');
    itemPage.buttonCreate();
    cy.wait(1000);
    itemPage.verifyItem().should('have.text', dataItem.primerItem);
    //2do item
    itemPage.closeNotification();
    itemPage.nameItem(dataItem.segundoItem);
    itemPage.selectCategory('Categoría');
    itemPage.categoryName('Aditivos');
    //cy.get('.form-group-textfield-input input').eq(1).click();
    itemPage.selectUnit('unidad');
    itemPage.selectLocation();
    itemPage.locationName('Deposito Venecia');
    itemPage.buttonCreate();
    cy.wait(1000);
    itemPage.verifyItem().should('have.text', dataItem.segundoItem);
  });

  it('Deberia editar el inventariado', () => {
    cy.wait(1000);
    inventoryPage.buttonAdmin();
    inventoryPage.selectInventory();
    cy.wait(1000);
    inventoryPage.selectItem();
    //ajuste1
    cy.wait(1000);
    inventoryPage.buttonAdjust();
    cy.wait(1000);
    inventoryPage.fieldAdjust();
    cy.wait(1000);
    inventoryPage.buttonSave();
    cy.wait(1000);
    inventoryPage
      .verifyFirstText(0)
      .should(
        'have.text',
        'panAdditivesDeposito Venecia1.000,00 unidad1.000,00 unidad'
      );
    /*inventoryPage.verifyFirstText(1).should('have.text', 'Additives');
    inventoryPage.verifyFirstText(2).should('have.text', 'subcategoria');
    inventoryPage.verifyFirstText(3).should('have.text','Deposito Venecia');
    inventoryPage.verifyFirstText(4).should('have.text','1.000,00 unidad');*/
    //2do item
    cy.wait(1000);
    inventoryPage.selectItem();
    //ajuste2
    cy.wait(1000);
    inventoryPage.buttonAdjust();
    cy.wait(1000);
    inventoryPage.fieldAdjust();
    inventoryPage.buttonSave();
    cy.wait(1000);
    inventoryPage
      .verifySecondText(0)
      .should(
        'have.text',
        'salchichaAdditivesDeposito Venecia1.000,00 unidad1.000,00 unidad'
      );
    /*inventoryPage.verifySecondText(1).should('have.text', 'Additives');
    inventoryPage.verifyFirstText(2).should('have.text', 'subcategoria');
    inventoryPage.verifySecondText(3).should('have.text','Deposito Venecia');
    inventoryPage.verifySecondText(4).should('have.text','1.000,00 unidad');*/
  });
});
