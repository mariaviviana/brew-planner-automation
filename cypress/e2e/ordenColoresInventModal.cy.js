import { LoginPage } from '../support/pages/loginPage';
import { CreateOrderDashboardPage } from '../support/pages/createOrderDashboardPage';
//reference types = "cypress";
describe('Creacion de orden combiinada y comprobacion de colores del producto en el modal', () => {
  let dataUser;
  let dataItem;
  let height;
  let offset;
  const loginPage = new LoginPage();
  const createOrderDashboardPage = new CreateOrderDashboardPage();

  before('Asociando archivo Json', () => {
    cy.fixture('dataLogin').then((data) => {
      dataUser = data;
      cy.fixture('dataItem').then((data) => {
        dataItem = data;
      });
    });
    cy.window().then((win) => {
      height = win.innerHeight;
      offset = -height / 2 - 50;
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
    createOrderDashboardPage.openModal(500, 500);
    createOrderDashboardPage.openMenuBeerStyles();
    createOrderDashboardPage.selectBeerStyle();
    createOrderDashboardPage.buttonSave();
    cy.get('.is-to-day').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      offset: { top: offset }
    });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
    cy.wait(6000);
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
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(0)
      .clear({ force: true });
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(0)
      .type('600', { force: true });
    cy.get(
      'div[class*="dashboard-modal-task-collapsible-content__input-volume"]:eq(2)'
    ).click({ force: true });
    cy.get('input[name="isConfirmProduct"]:eq(0)').click(); //confirmar
    cy.get('span[data-inventory-info="enough_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(15, 157, 88)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i:eq(0)'
    ).click();
    //1er item
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(0) >div >span'
    ).should('have.text', 'pan (unidad)Cantidad');
    cy.get('div[class="bp-chip enough-inventory"] span[class="bp-chip__text"]')
      .eq(0)
      .should('have.text', 'Deposito Venecia (600 unidad)');
    //verde
    cy.get(
      'div[class="bp-chip enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(0)
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');
    //2do item
    cy.get(
      'div[class="dashboard-modal-item-amount__list"] >ul >li:eq(1) >div >span'
    ).should('have.text', 'salchicha (unidad)Cantidad');
    cy.get('div[class="bp-chip enough-inventory"] span[class="bp-chip__text"]')
      .eq(1)
      .should('have.text', 'Deposito Venecia (600 unidad)');
    //verde
    cy.get(
      'div[class="bp-chip enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(1)
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');

    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    cy.get('.is-to-day').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      offset: { top: offset }
    });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
    cy.wait(8000);
    cy.get(
      'span[data-inventory-status-icon-state="all_discounted_confirmed"]'
    ).should('exist');
    cy.wait(1000);
    //FERMENTING
    createOrderDashboardPage.rightButton();
    createOrderDashboardPage.selectEditOption();
    cy.get('.custom-notification').each(($notificacion) => {
      cy.wrap($notificacion).click({ force: true });
    });
    createOrderDashboardPage.configFerm();
    cy.get(
      '[style="width: 100%; position: relative; text-align: initial;"] > .modal-order-task-container > .modal-order-task-list > [data-index-day="1"] > .toggle-icon > .material-icons'
    ).click();
    cy.get(
      'li[class="dashboard-modal-task-collapsible-content dashboard-modal-task-collapsible-content__list-header row"] >div:eq(6) >div'
    ).should('have.text', 'super pancho ');
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(10)
      .clear({ force: true });
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(10)
      .type('500', { force: true });
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(11)
      .click();
    cy.get('span[data-inventory-info="enough_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(15, 157, 88)'
    );
    cy.get('span[data-inventory-info="not_inventory"]').should(
      'have.css',
      'background-color',
      'rgb(219, 68, 55)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i:eq(1)'
    ).click();
    //1er item
    cy.get('li[data-item-description="pan"]>div>span:eq(0)').should(
      'have.text',
      'pan (unidad)'
    );
    cy.get('div[class="bp-chip enough-inventory"] span[class="bp-chip__text"]')
      .eq(0)
      .should('have.text', 'Deposito Venecia (400 unidad)');
    //verde
    cy.get(
      'div[class="bp-chip enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(0)
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');

    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] span[class="bp-chip__text"]'
    )
      .eq(0)
      .should('have.text', 'Necesita comprar (100 unidad)');
    //rojo
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(0)
      .should('have.css', 'background-color', 'rgb(219, 68, 55)');
    //2do item
    cy.get('li[data-item-description="salchicha"]>div>span:eq(0)').should(
      'have.text',
      'salchicha (unidad)'
    );
    cy.get('div[class="bp-chip enough-inventory"] span[class="bp-chip__text"]')
      .eq(1)
      .should('have.text', 'Deposito Venecia (400 unidad)');
    //verde
    cy.get(
      'div[class="bp-chip enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(1)
      .should('have.css', 'background-color', 'rgb(15, 157, 88)');
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] span[class="bp-chip__text"]'
    )
      .eq(1)
      .should('have.text', 'Necesita comprar (100 unidad)');
    //rojo
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(1)
      .should('have.css', 'background-color', 'rgb(219, 68, 55)');

    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    cy.get('.is-to-day').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      offset: { top: offset }
    });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
    cy.wait(6000);
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
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(41)
      .clear({ force: true });
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(41)
      .type('300', { force: true });
    cy.get('.dashboard-modal-task-collapsible-content__input >div >input')
      .eq(42)
      .click({ force: true });

    cy.get('span[data-inventory-info="not_inventory"]:eq(1)').should(
      'have.css',
      'background-color',
      'rgb(219, 68, 55)'
    );
    cy.get(
      'span[class="material-icons modal-order-task-list-item__receipe is-body"] >i'
    )
      .eq(2)
      .click();
    //1er item
    cy.get('li[data-item-description="pan"]>div>span')
      .eq(0)
      .should('have.text', 'pan (unidad)');
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] span[class="bp-chip__text"]'
    )
      .eq(0)
      .should('have.text', 'Necesita comprar (300 unidad)');
    //rojo
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(0)
      .should('have.css', 'background-color', 'rgb(219, 68, 55)');
    //2do item
    cy.get('li[data-item-description="salchicha"]>div>span')
      .eq(0)
      .should('have.text', 'salchicha (unidad)');
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] span[class="bp-chip__text"]'
    )
      .eq(1)
      .should('have.text', 'Necesita comprar (300 unidad)');
    //rojo
    cy.get(
      'div[class="bp-chip is-item-missing not-enough-inventory"] >span[class="txt-default pull-left"] >span >i'
    )
      .eq(1)
      .should('have.css', 'background-color', 'rgb(219, 68, 55)');

    cy.get('button[class="dashboard-modal-content__button-save"]').click();
    cy.get('.is-to-day').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      offset: { top: offset }
    });
    cy.wait(5000);
    cy.get(
      'button[class="with-opacity btn-right-fixed btn-right-upload hidden-xs"]'
    ).click();
  });
});
