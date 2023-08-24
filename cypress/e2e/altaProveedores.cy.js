import { LoginPage } from '../support/pages/loginPage';
import { SuppliersPage } from '../support/pages/suppliersPage';
//reference types = "cypress";
describe('Alta a proveedores', () => {
  let dataUser;
  let dataItem;
  const loginPage = new LoginPage();
  const suppliersPage = new SuppliersPage();

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
    suppliersPage.buttonAdmin();
    suppliersPage.selectSuppliers();
    cy.wait(2000);
    //proveedores
    cy.get('.form-group-textfield-input >input').eq(0).type('Serenisima');
    cy.get('.form-group-textfield-input >input').eq(1).type('12');
    cy.get('.form-group-textfield-input >input').eq(2).type('21');
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]'
    ).click();
    cy.get('tbody[class*="mui-table-body"]').should('exist');
    cy.wait(2000);
    //direcciones
    cy.get('tbody[class="mui-table-body admin-table-body"]>tr:eq(1)').click();
    cy.get('.basic-form-buttons >span:eq(0) >button').click();
    cy.get('.form-group-textfield-input >input')
      .eq(0)
      .clear()
      .type('Venecia135');
    cy.get('.form-group-textfield-input >input').eq(1).clear().type('1625');
    cy.get('.form-group-textfield-input >input')
      .eq(2)
      .clear()
      .type('Loma Verde');
    cy.get('.form-group-textfield-input >input')
      .eq(3)
      .clear({ force: true })
      .type('Buenos Aires');
    cy.get('.form-group-textfield-input >input')
      .eq(4)
      .clear()
      .type('Argentina');
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]'
    ).click();
    cy.get('tbody[class*="mui-table-body"]').should('exist');
    cy.wait(2000);
    //contactos
    cy.get('.basic-form-buttons >span >button').eq(1).click();
    cy.get('.basic-form-fields >div').eq(0).type('viviana');
    cy.get('.form-group-dropdown-input > div').eq(0).click();
    cy.get('div.form-group-dropdown-input > div > div#1').click();
    cy.get('.basic-form-fields >div').eq(2).click().type('elmaiten2@gmail.com');
    cy.get('button[class*="form-group-button"]').eq(3).click().click();
    cy.get('tbody[class*="mui-table-body"]').should('exist');
    cy.wait(2000);
    //suppliersPage.closeNotification();
    cy.get('.basic-form-buttons >span >button').eq(2).click().click();
    cy.wait(2000);
    //items 1er Item
    cy.get('.bp-textfield-suggested >div >label').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list >ul >li:eq(0)').click();
    cy.get('.form-group-textfield-input >input:eq(0)').click();
    cy.get('.form-group-textfield-input >input:eq(0)').type('2178');
    cy.get('.form-group-textfield-input >input:eq(1)').click();
    cy.get('.form-group-textfield-input >input:eq(1)').type('unidad');
    cy.get('.form-group-textfield-input > input:eq(2)')
      .should('be.visible') 
      .click({ force: true })
      .clear()
      .type('10');
      cy.get('.form-group-textfield-input > input:eq(3)')
      .should('be.visible') 
      .click({ force: true })
      .clear()
      .type('12');
    cy.get('.form-group-textfield-input >input:eq(4)').click();
    cy.get('.form-group-textfield-input >input:eq(4)').type('1');
    cy.get('.form-group-textfield-input >input:eq(5)').click();
    cy.get('.form-group-textfield-input >input:eq(5)').type('1');
    cy.get('button[class*="form-group-button"]').eq(3).click();
    cy.wait(1000);
    cy.get('tbody[class*="mui-table-body"]>tr:eq(0)').should('exist');
    //2do Item
    cy.get('.bp-textfield-suggested >div >label').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list >ul >li:eq(1)').click();
    cy.get('.form-group-textfield-input >input:eq(0)').click();
    cy.get('.form-group-textfield-input >input:eq(0)').type('2178');
    cy.get('.form-group-textfield-input >input:eq(1)').click();
    cy.get('.form-group-textfield-input >input:eq(1)').type('1');
    cy.get('.form-group-textfield-input > input:eq(2)')
      .should('be.visible') 
      .click({ force: true })
      .clear()
      .type('10');
      cy.get('.form-group-textfield-input > input:eq(3)')
      .should('be.visible') 
      .click({ force: true })
      .clear()
      .type('12');
    cy.get('.form-group-textfield-input >input:eq(4)').click();
    cy.get('.form-group-textfield-input >input:eq(4)').type('1');
    cy.get('.form-group-textfield-input >input:eq(5)').click();
    cy.get('.form-group-textfield-input >input:eq(5)').type('1');
    cy.get('button[class*="form-group-button"]').eq(3).click();
    cy.wait(1000);
    cy.get('tbody[class*="mui-table-body"] >tr:eq(1)').should('exist');
    cy.get('button[class*="form-group-button"]').eq(0).click();
  });
});
