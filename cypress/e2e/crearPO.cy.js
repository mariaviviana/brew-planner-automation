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

  it('Deberia dar de alta a un proveedor', () => {
    poPage.buttonAdmin();
    poPage.selectPO();
    cy.wait(2000);
    cy.get('div[class="basic-form-fields"]>div').eq(0).type('{downarrow}');
    cy.get('div[class="bp-textfield-suggested-list"]>ul>li:eq(0)').click();
    cy.get('div[class="basic-form-fields"]>div').eq(1).click();
    cy.get('div[id="0"]>span').click();
    cy.get('.form-group-textfield-input >input').click();
    cy.get('.form-group-textfield-input >input').type('Creando orden de compra');
    cy.get('button[class="form-group-button form-group-button-icon primary-icon "]').click();
    cy.get('tbody[class="mui-table-body admin-table-body"]').click();
    cy.get('button[class="form-group-button form-group-button-icon undefined "]').eq(0).click();
    cy.get('.basic-form-fields > div > div > div >input').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list >ul >li:eq(0)').click();
    cy.get('.form-group-textfield-input >input').eq(1).type('12');

  })
})