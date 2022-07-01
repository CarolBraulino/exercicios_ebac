/// <reference types="cypress" />

const data = require("../fixtures/data.json")
const { dashboardPage } = require('../support/pages')

describe('Access Admin Panel', () => {

  //hooks
  before(() => {
    cy.task('tabNavigation', { user: data.usuario, pass: data.senha })
  });

  beforeEach(() => {
    // cy.login(data.usuario, data.senha)
    cy.visit('/wp-admin')
  })

  // only, skip
  it('should login with valid credentials', () => {
    dashboardPage.siteName.should("be.visible")
  })

  afterEach(() => {
    
  });

  after(() => {
    
  });
})
