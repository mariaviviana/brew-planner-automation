import { LoginPage } from '../support/pages/loginPage';
import { ProductPage } from '../support/pages/productPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
//reference types = "cypress";
describe('Prueba de inicio de sesion en BP', () => {
  let dataUser;
  let dataItem;
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();

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
    cy.get('div[class="form-group-textfield-input"]>input:eq("0")').type(
      'super pancho'
    );
    cy.get(
      'div[class="basic-form-fields"] >div[class="form-group form-group-textfield-suggested is-dark"]'
    )
      .eq(0)
      .type('{downarrow}');
    cy.get(
      'div[class="bp-textfield-suggested-list"] >ul>li[class="bp-textfield-suggested-list-item"]:eq(5)'
    ).click();
    cy.get(
      'div[class="basic-form-fields"] >div[class="form-group form-group-textfield-suggested is-dark"]'
    )
      .eq(1)
      .type('{downarrow}');
    cy.get(
      'div[class="bp-textfield-suggested-list"] >ul >li[class="bp-textfield-suggested-list-item"]:eq(8)'
    ).click();
    cy.get('div[class="form-group-textfield-input"]>input:eq("1")')
      .clear()
      .type('1');
    cy.get('button[class*="form-group-button"]').click();
    cy.wait(2000);
    cy.get('tbody[class="mui-table-body admin-table-body"]').click();
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr >td:eq(0)'
    ).should('have.text', 'super pancho');
  });

  it('Deberia configurar los items del producto', () => {
    productPage.buttonAdmin();
    productPage.selectProducts();
    cy.wait(2000);
    cy.get('tbody[class="mui-table-body admin-table-body"]').click();
    cy.get('.basic-form-buttons > span > button:eq(0)').click();
    //select icons
    cy.get('.bp-grid-item-withfilter > div:eq(9)').click();
    cy.get('.bp-grid-item-withfilter > div:eq(26)').click();
    cy.get('.bp-grid-item-withfilter > div:eq(38)').click();
    cy.get('div[class="basic-form-content pull-left"]>button:eq(1)').click();
    cy.get('.basic-form-buttons > span:eq(1)').click();
    //1 select subtraction items
    cy.get('.bp-textfield__input').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list > ul > li:eq(0)').click({
      force: true
    });
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').type('1', { force: true });
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]'
    ).click();
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(0)'
    ).should('have.text', 'pan');
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(1)'
    ).should('have.text', '1,00 unidad');

    //2 select subtraction items
    cy.get('.bp-textfield__input').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list > ul > li:eq(2)').click({
      force: true
    });
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').type('1', { force: true });
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]'
    ).click();
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(1) >td:eq(0)'
    ).should('have.text', 'salchicha');
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(1) >td:eq(1)'
    ).should('have.text', '1,00 unidad');

    cy.get('div[class="basic-form-buttons"]>span:eq(2)>button').click();
    //select adition item
    cy.get('div[class="bp-textfield-suggested"]').type('{downarrow}');
    cy.get('.bp-textfield-suggested-list > ul > li:eq(1)').click({
      force: true
    });
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').clear();
    cy.get('.form-group-textfield-input > input').type('1', { force: true });
    cy.get(
      'button[class="form-group-button form-group-button-icon primary-icon "]'
    ).click();
    cy.wait(1000);
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(0)'
    ).should('have.text', 'pancho');
    cy.get(
      'tbody[class="mui-table-body admin-table-body"] >tr:eq(0) >td:eq(1)'
    ).should('have.text', '1,00 unidad');
    //atras
    cy.get('div[class="basic-form-buttons"]>span>button:eq(0)').click();
  });

  it('Deberia dar de alta una orden combinada y verificar que tenga el producto configurado', () => {
    cy.wait(2000);
    createOrderDashboardPage.openModal(500, 500);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    //cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 2000 });
    cy.wait(5000);
    //BREWING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    cy.get('.custom-notification').each(($notificacion) => {
      cy.wrap($notificacion).click();
    });
    createOrderDashboardPage.configBrew();
    cy.get(
      '[style="width: 100%; position: relative; text-align: initial;"] > .modal-order-task-container > .modal-order-task-list > [data-index-day="1"] > .toggle-icon > .material-icons'
    ).click({ force: true });
    cy.get(
      'li[class="dashboard-modal-task-collapsible-content dashboard-modal-task-collapsible-content__list-header row"]>div:eq(0) >div'
    ).should('have.text', 'super pancho ');
    cy.get('.dashboard-modal-task-collapsible-content__input input').should(
      'have.attr',
      'value',
      '5'
    );
    cy.get('input[name="isConfirmProduct"]:eq(0)').click();
    cy.get('span[data-inventory-info="enough_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(15, 157, 88)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i:eq(0)'
    ).click();
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(0) >div >span'
    ).should('have.text', 'pan (unidad)Cantidad');
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(1) >div >span'
    ).should('have.text', 'salchicha (unidad)Cantidad');
    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    //cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 1000 });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
    cy.wait(6000);
    cy.get(
      'span[data-inventory-status-icon-state="all_discounted_confirmed"]'
    ).should('exist');
    //FERMENTING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    cy.get('.custom-notification').each(($notificacion) => {
      cy.wrap($notificacion).click();
    });
    createOrderDashboardPage.configFerm();
    cy.get(
      '[style="width: 100%; position: relative; text-align: initial;"] > .modal-order-task-container > .modal-order-task-list > [data-index-day="1"] > .toggle-icon > .material-icons'
    ).click();
    cy.get(
      'li[class="dashboard-modal-task-collapsible-content dashboard-modal-task-collapsible-content__list-header row"]>div:eq(0) >div'
    ).should('have.text', 'super pancho ');
    cy.get('.dashboard-modal-task-collapsible-content__input input').should(
      'have.attr',
      'value',
      '5'
    );
    cy.get('input[name="isConfirmProduct"]').eq(1).click();
    cy.get('span[data-inventory-info="enough_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(15, 157, 88)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i:eq(1)'
    ).click();
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(0) >div >span'
    ).should('have.text', 'pan (unidad)Cantidad');
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(1) >div >span'
    ).should('have.text', 'salchicha (unidad)Cantidad');
    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    //cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 1500 });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
    cy.wait(6000);
    cy.get(
      'span[data-inventory-status-icon-state="all_discounted_confirmed"]'
    ).should('exist');
    //PACKAGING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    cy.get('.custom-notification').each(($notificacion) => {
      cy.wrap($notificacion).click();
    });
    createOrderDashboardPage.configPack();
    cy.get(
      '[style="width: 100%; position: relative; text-align: initial;"] > .modal-order-task-container > .modal-order-task-list > [data-index-day="1"] > .toggle-icon > .material-icons'
    ).click();
    cy.get(
      'li[class="dashboard-modal-task-collapsible-content dashboard-modal-task-collapsible-content__list-header row"]>div:eq(0) >div'
    ).should('have.text', 'super pancho ');
    cy.get('.dashboard-modal-task-collapsible-content__input input').should(
      'have.attr',
      'value',
      '5'
    );
    cy.get('span[data-inventory-info="enough_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(15, 157, 88)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i:eq(2)'
    ).click();
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(0) >div >span'
    ).should('have.text', 'pan (unidad)Cantidadmode_edit');
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(1) >div >span'
    ).should('have.text', 'salchicha (unidad)Cantidadmode_edit');
    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    //cy.get('.is-to-day').scrollIntoView().invoke('offset', { top: 2500 });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click({ force: true });
    /*cy.wait(5000);
    cy.get(
      'span[data-inventory-status-icon-state="all_discounted_confirmed"]'
    ).should('exist');*/
  });
});
