/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const { faker } = require('@faker-js/faker')
const { loginPage, enderecoPage } = require('../../support/page_objects')
const dadosCadastro = require('../../fixtures/cadastro.json')
const dadosEndereco = require('../../fixtures/endereco.json')

Given('I access the my account page', () =>{
    cy.visit('/minha-conta')
})

When('I register in with email {string} and senha {string}', () =>{
    let emailFaker = faker.internet.email();
    loginPage.register(emailFaker, dadosCadastro.senha)
})

And('I click to complete the account details', () =>{
    contaPage.complete(dadosCadastro.nome, dadosCadastro.sobrenome)
})

And('I click to complete the adress details', () =>{
    enderecoPage.endereco(dadosEndereco.nome, dadosEndereco.sobrenome, dadosEndereco.empresa, dadosEndereco.pais,
    dadosEndereco.endereco, dadosEndereco.numero, dadosEndereco.cidade, dadosEndereco.estado, dadosEndereco.cep,
    dadosEndereco.telefone, dadosEndereco.email)
})

Then('I should see a message of success', () => {
    enderecoPage.mensagem.should('contain', 'Endereço alterado com sucesso.')
})