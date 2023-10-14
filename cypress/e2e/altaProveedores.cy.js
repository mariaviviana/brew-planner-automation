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
    suppliersPage.supplierData(0, 'Serenisima');
    suppliersPage.supplierData(1, '12');
    suppliersPage.supplierData(2, '21');
    suppliersPage.addButton();
    suppliersPage.shouldBeList().should('exist');
    cy.wait(2000);
    //direcciones
    suppliersPage.selectSupplier();
    suppliersPage.addDataButton(0);
    suppliersPage.inputAddressData(0, 'Venecia135');
    suppliersPage.inputAddressData(1, '1625');
    suppliersPage.inputAddressData(2, 'Loma Verde');
    suppliersPage.inputAddressData(3, 'Buenos Aires');
    suppliersPage.inputAddressData(4, 'Argentina');
    suppliersPage.addButton();
    suppliersPage.shouldBeList().should('exist');
    cy.wait(2000);
    //contactos
    suppliersPage.addDataButton(1);
    suppliersPage.addContactName('Viviana');
    suppliersPage.deployContactList();
    suppliersPage.selectContactName();
    suppliersPage.addEmail('elmaiten2@gmail.com');
    suppliersPage.addButton();
    suppliersPage.shouldBeList().should('exist');
    cy.wait(2000);
    //suppliersPage.closeNotification();
    suppliersPage.addDataButton(2);
    cy.wait(2000);
    //items 1er Item
    suppliersPage.deployItemsList();
    suppliersPage.selectItems(0);
    suppliersPage.selectField(0);
    suppliersPage.inputItemInfo(0, '2178');
    suppliersPage.selectField(1);
    suppliersPage.inputItemInfo(1, 'unidad');
    suppliersPage
      .showItem(2)
      .should('be.visible')
      .click({ force: true })
      .clear()
      .type('10');
    suppliersPage
      .showItem(3)
      .should('be.visible')
      .click({ force: true })
      .clear()
      .type('12');
    suppliersPage.selectField(4);
    suppliersPage.inputItemInfo(4, '1');
    suppliersPage.selectField(5);
    suppliersPage.inputItemInfo(5, '1');
    suppliersPage.addButton();
    cy.wait(2000);
    //2do Item
    suppliersPage.deployItemsList();
    suppliersPage.selectItems(1);
    suppliersPage.selectField(0);
    suppliersPage.inputItemInfo(0, '2178');
    suppliersPage.selectField(1);
    suppliersPage.inputItemInfo(1, 'unidad');
    suppliersPage
      .showItem(2)
      .should('be.visible')
      .click({ force: true })
      .clear()
      .type('10');
    suppliersPage
      .showItem(3)
      .should('be.visible')
      .click({ force: true })
      .clear()
      .type('12');
    suppliersPage.selectField(4);
    suppliersPage.inputItemInfo(4, '1');
    suppliersPage.selectField(5);
    suppliersPage.inputItemInfo(5, '1');
    suppliersPage.addButton();
    suppliersPage.shouldBeList().should('exist');
    suppliersPage.selectBackButton();
  });
});
