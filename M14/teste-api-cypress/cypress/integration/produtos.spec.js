/// <reference types ="cypress" />

import contrato from '../contracts/produtos.contracts'

describe('Teste de Funcionalidade Produtos', () => {
    let token

    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
    });

    it.only('Deve validar contrato de produtos', () => {
        cy.request('produtos').then(response =>{
            return contrato.validateAsync(response.body)
        })
    });

    it('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos'
        }).then((Response) => {
            //expect(Response.body.produtos[0].nome).to.equal("Logitech MX Vertical")
            expect(Response.status).to.equal(200)
            expect(Response.body).to.have.property('produtos')
            expect(Response.duration).to.be.lessThan(20)
        })
    });

    it('Cadastrar produto', () => {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": produto,
                "preco": 400,
                "descricao": "Novo Produto",
                "quantidade": 381
            },
            headers: { authorization: token }
        }).then((Response) => {
            expect(Response.status).to.equal(201)
            expect(Response.body.message).to.equal('Cadastro realizado com sucesso')
        })

    });

    it('Deve validar mensagem de erro ao cadastrar produto repetido', () => {
        cy.cadastrarProduto(token, "Produto EBAC Novo 1", 250, "Descrição do produto novo", 180)
            .then((Response) => {
                expect(Response.status).to.equal(400)
                expect(Response.body.message).to.equal('Já existe produto com esse nome')
            })
    });

    it('Deve editar um produto já cadastrado', () => {
        cy.request('produtos').then(response => {
            let id = response.body.produtos[0]._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: { authorization: token },
                body: {
                    "nome": "Produto EBAC Novo 2",
                    "preco": 500,
                    "descricao": "Produto editado",
                    "quantidade": 200
                }
            })
        }).then(response => {
            expect(response.body.message).to.equal('Registro alterado com sucesso')
        })

    });

    it('Deve editar um produto cadastrado previamente', () => {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProduto(token, produto, 250, "Descrição do produto novo", 180)
            .then(response => {
                let id = response.body._id

                cy.request({
                    method: 'PUT',
                    url: `produtos/${id}`,
                    headers: { authorization: token },
                    body: {
                        "nome": produto,
                        "preco": 200,
                        "descricao": "Produto editado",
                        "quantidade": 300
                    }
                }).then(response => {
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
                })
            })
    });

    it('Deve deletar um produto previamente cadastrado', () => {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProduto(token, produto, 250, "Descrição do produto novo", 180)
            .then(response => {
                let id = response.body._id
                cy.request({
                    method: 'DELETE',
                    url: `produtos/${id}`,
                    headers: {authorization: token}
                }).then(response => {                    
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
                    expect(response.status).to.equal(200)
                    
                })
            })
    });

});