///<reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{ 
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso ', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Silva', 'EBAC', 'Brasil', 'Rua São Paulo', '21', 'Presidente Prudente', 'São Paulo', '19025510', '18912321929', 'teste@teste.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numeroendereco,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de entrega com sucesso ', () => {
        EnderecoPage.editarEnderecoEntrega('Ana', 'Silva', 'EBAC', 'Brasil', 'Rua São Paulo', '21', 'Presidente Prudente', 'São Paulo', '19025510',)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de entrega com sucesso usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numeroendereco,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});