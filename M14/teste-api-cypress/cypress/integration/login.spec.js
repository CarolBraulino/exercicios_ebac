/// <reference types ="cypress" />

describe('Login - Teste da API ServRest', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        }).then((Response)=>{
            expect(Response.status).to.equal(200)
            expect(Response.body.message).to.equal("Login realizado com sucesso")
            cy.log(Response.body.authorization)
        })
    });
    
});