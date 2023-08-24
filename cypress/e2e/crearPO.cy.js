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
    cy.get('div[class="bp-textfield-suggested-list"]>ul>li:eq(1)').click();
    cy.get('div[class="basic-form-fields"]>div').eq(1).click();
    cy.get('div[id="0"]>span').click();
    cy.get('.form-group-textfield-input >input').click();
    cy.get('.form-group-textfield-input >input').type('Creando orden de compra');
    cy.get('button[class*="form-group-button"]').eq(2).click();
    cy.wait(3000);
    cy.get('tbody[class*="mui-table-body"] >tr').eq(0).click();
    cy.get('button[class*="form-group-button"]').eq(0).click();
    cy.wait(2000);
    //1er item
    cy.get('.basic-form-fields > div > div > div >input').click().type('{downarrow}');
    cy.get('.bp-textfield-suggested-list>ul>li').eq(0).click();
    cy.get('.form-group-textfield-input > input').eq(0).click();
    cy.get('.form-group-textfield-input > input').eq(0).clear();
    cy.get('.form-group-textfield-input > input').eq(0).type('10');
    //cy.get('.form-group-textfield-input > input').eq(1).type('1');
    cy.get('.form-group-textfield-input >input').eq(2).type(' , agregando item1');
    cy.get('.basic-form-buttons >span:eq(2) >button').click();
    cy.get('.basic-form-buttons >div >button').click();
    cy.wait(2000);
    //2do item
    cy.get('.basic-form-fields > div > div > div >input').click().type('{downarrow}');
    cy.get('.bp-textfield-suggested-list>ul>li').eq(1).click();
    cy.get('.form-group-textfield-input > input').eq(0).click();
    cy.get('.form-group-textfield-input > input').eq(0).clear();
    cy.get('.form-group-textfield-input > input').eq(0).type('10');
    //cy.get('.form-group-textfield-input > input').eq(1).type('1');
    cy.get('.form-group-textfield-input >input').eq(2).type(' , agregando item2 y enviado el mail');
    cy.get('.basic-form-buttons >span:eq(3) >button').click();
    cy.get('.basic-form-buttons >div >button').click();
    cy.wait(1000);
    //enviar mail al proveedor
    cy.get('.basic-form-buttons >span:eq(2) >button').click();
    cy.contains('CONFIRMAR').click();
    cy.get('tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(6)').should('have.text','Pedido');
    cy.get('tbody[class="mui-table-body admin-table-body"] >tr:eq(1) >td:eq(6)').should('have.text','Pedido');
    //volver al menu inicial
    cy.get('.basic-form-buttons >span:eq(0) >button').click();
    cy.get('tbody[class*="mui-table-body"] >tr').eq(0).click();
    cy.get('button[class*="form-group-button"]').eq(1).click();
    cy.wait(2000);
    cy.get('.basic-form-buttons >span:eq(1) >button').click();
    cy.wait(2000);
    cy.get('div[style*="box-sizing:border-box"]>button').eq(1).click();
    cy.get('td[class="mui-table-row-column"]').eq(6).should("have.text","No más en camino");
    cy.get('td[class="mui-table-row-column"]>div>span').eq(1).should("have.text","Cerrada Completa");
  })
})