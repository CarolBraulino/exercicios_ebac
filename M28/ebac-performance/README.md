# Ebac Performance

# Automação de Teste de Performance com K6

This is the repository for automation of performance tests, developed to work with K6.

## Table of Contents

1. [Goal](#goal)
2. [Tests](#tests)
3. [Initial Setup](#initial-setup)
4. [Run Tests](#run-tests)

## Goal

O objetivo deste repositório é ter um facil entendimento, focado no desenvolvimento de testes de desempenho automatizados para API, usando [K6](https://k6.io), uma ferramenta de teste de carga de código aberto que torna os testes de desempenho fáceis e produtivos para os times de qualidade.

## Tests

Os testes foram escritos utilizando a linguagem JavaScript com Grafana K6.

## Run tests

### Initial Setup

1. Requer node. Para instalar, execute `npm install node` ou realize o download [Node](https://nodejs.org/en/download/)
2. Rode o comando `npm install` para instalar dependencias
3. Requer o repositorio EBAC Demo Store Server para executar. Utilize o Git clone [EBAC Demo Store Server](https://github.com/EBAC-QE/ebac-demo-store-server.git) para sua maquina local, siga os passos para inciar que contem no README.

### Run Tests

- Execute todos os comandos acima antes de inciar os testes, e para cada teste execute um comando abaixo.
  Exemplos:
- Para iniciar o teste de performance de User API, execute `npm run test:user`
- Para iniciar o teste de performance de products API, execute `npm run test:products`
- Para iniciar o teste de performance de customers API, execute `npm run test:customers`
<p>