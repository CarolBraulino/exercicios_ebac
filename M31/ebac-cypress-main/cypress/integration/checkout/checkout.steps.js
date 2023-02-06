/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const { pedidosPage } = require('../../support/page_objects')
const dadosProdutos = require('../../fixtures/prodRequest.json')
const dadosLogin = require('../../fixtures/perfil.json')

Given('I have added a product in the cart', () => {
    cy.addProduct(dadosProdutos.size, dadosProdutos.color, dadosProdutos.quantity,
        dadosProdutos.add_cart, dadosProdutos.product_id, dadosProdutos.variation_id)
})

When('I finish the order', () => {
    cy.placeOrder(dadosLogin.usuario, dadosLogin.senha)
})

Then('I should see a message of success', () => {
    pedidosPage.mensagem.should('contain', 'Obrigado. Seu pedido foi recebido.')
})