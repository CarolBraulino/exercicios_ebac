# API Testing

# Automação API de teste com SuperTest

Este é o repositório para automação da API, desenvolvido para trabalhar com o SuperTest.
O objetivo deste repositório é ser de fácil entendimento focado no desenvolvimento de testes automatizados para API, utilizando [SuperTest](https://www.npmjs.com/package/supertest)

## Run tests

### Initial Setup

1. Requer node. To install, Para instalar, execute `npm install node` ou faça o download [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar as dependências
3. Requer o EBAC Demo Store Admin para executar. Clone o repositorio utilizando o `Git clone` do [EBAC Demo Store Admin](https://github.com/EBAC-QE/ebac-demo-store-admin.git) para sua máquina local e comece a seguir as etapas no README.
4. Requer o EBAC Demo Store Server para executar. Clone o repositorio utilizando o `Git clone` do [EBAC Demo Store Server](https://github.com/EBAC-QE/ebac-demo-store-server.git) para sua máquina local e comece a seguir as etapas no README.

### Run Tests

-Execute um dos comandos abaixo para executar os testes.
  Examples:
- Para executar todos os testes, execute `npm run test`
- Para executar apenas os testes de verificação de integridade, execute `npm run test:healthCheck`
- Para executar apenas os testes E2E, execute `npm run test:e2e`
<p>