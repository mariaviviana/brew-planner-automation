import { LoginPage } from '../support/pages/loginPage';
import { PoPage } from '../support/pages/poPage';
//reference types = "cypress";
describe('Alta a proveedores', () => {
  let dataUser;
  let dataItem;
  const loginPage = new LoginPage();
  const poPage = new PoPage();

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

  it('Deberia dar de alta una PO', () => {
    poPage.buttonAdmin();
    poPage.selectPO();
    cy.wait(2000);

    poPage.selectFields();
    poPage.selectSuppliers();
    poPage.selectDepositFields();
    poPage.selectDepositName();
    poPage.selectCommentsField();
    poPage.addComments();
    poPage.saveButton();
    cy.wait(3000);
    poPage.selectNewPO();
    poPage.selectEditButton(0);
    cy.wait(2000);
    //1er item
    poPage.dropDownItemsList();
    poPage.selectItem(0);
    poPage.selectFieldAmount();
    poPage.clearFieldAmount();
    poPage.inputAmount();
    //cy.get('.form-group-textfield-input > input').eq(1).type('1');
    poPage.addMoreComents(' , agregando item1');
    poPage.selectSaveButton();
    poPage.SelectButtonCreate();
    cy.wait(2000);
    //2do item
    poPage.dropDownItemsList();
    poPage.selectItem(1);
    poPage.selectFieldAmount();
    poPage.clearFieldAmount();
    poPage.inputAmount();
    //cy.get('.form-group-textfield-input > input').eq(1).type('1');
    poPage.addMoreComents(' , agregando item2 y enviado el mail');
    poPage.selectButtonSave();
    poPage.SelectButtonCreate();
    cy.wait(1000);
    //enviar mail al proveedor
    poPage.selectSaveButton();
    poPage.selectConfirmButton();
    poPage.confirmOrderOneState().should('have.text','Pedido');
    poPage.confirmOrderTwoState().should('have.text','Pedido');
    //volver al menu inicial
    poPage.comeInitialMenu();
    poPage.selectNewPO();
    poPage.selectReceiveButton();
    cy.wait(2000);
    //confirmar recibidos
    poPage.showOrderStatus().should("have.text","No más en camino");
    //cy.get('td[class="mui-table-row-column"]>div>span').eq(1).should("have.text","Cerrada Completa");
  })
})