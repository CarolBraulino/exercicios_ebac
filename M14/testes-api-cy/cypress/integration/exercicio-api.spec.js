/// <reference types="cypress" />
const faker = require('faker-br');

describe('Testes da Funcionalidade Usuários', () => {
     

     it('Deve validar contrato de usuários', () => {
          cy.request({
               method: 'POST',
               url: 'login',
               body: {
                    "email": "Maria_qa@ebac.com.br",
                    "password": "teste"
               }
          }).then((response) => {
               expect(response.status).to.equal(200)
               expect(response.body.message).to.equal('Login realizado com sucesso')
               cy.log(response.body.authorization)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then((response) => {
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
          });
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          let nomeFaker = faker.name.firstName()          
          let emailFaker = faker.internet.email(nomeFaker)
          let senhaFaker = faker.internet.password()
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": nomeFaker,
                    "email": emailFaker,
                    "password": senhaFaker,
                    "administrador": 'true'
               }

          }).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal("Cadastro realizado com sucesso")
          });
     });

     it('Deve validar um usuário com email inválido', () => {
          cy.request({
               method: 'POST',
               url: 'login',
               body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
               },
               failOnStatusCode: false
          }).then((response) => {
               expect(response.status).to.equal(401)
               expect(response.body.message).to.equal("Email e/ou senha inválidos")
          });
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[2]._id
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    body: {
                         "nome": 'Fulano 9',
                         "email": 'fulanin@teste.com',
                         "password": 'teste',
                         "administrador": 'true'
                    }
               }).then(response => {
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
               })
          })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[2]._id
               cy.request({
                    method: 'DELETE',
                    url: `usuarios/${id}`
               }).then(response => {
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
                    expect(response.status).to.equal(200)
               })
          })
     });
});