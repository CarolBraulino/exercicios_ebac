/// <reference types="cypress" />
let dadosLogin

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('/minha-conta')
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')

        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 1)        
        cy.addProdutos('Abominable Hoodie', 'XS', 'Green', 1)        
        cy.addProdutos('Aether Gym Pant', '33', 'Brown', 1)        
        cy.addProdutos('Arcadio Gym Short', '33', 'Black', 1)

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
       
        cy.get('#order_comments').type('Teste de automatização do meu pedido')
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        

    });


})