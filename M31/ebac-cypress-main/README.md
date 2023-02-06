# Ebac Cypress

# Automação de Testes de Componentes com o Cypress

## Table of Contents

1. [Goal](#goal)
2. [Initial Setup](#initial-setup)
3. [Run Automation](#run-automation)

## Goal

O objetivo deste repositório é ser de fácil entendimento focado no desenvolvimento de testes automatizados para Web, utilizando o [Cypress](https://www.cypress.io/), ferramenta desenvolvida em linguagem JavaScript que proporciona rapidez, facilidade e confiabilidade nos testes.

A arquitetura desenvolvida para este projeto atende a necessidade de centralizar apenas um único BDD (Behavior Driven Development).

Este projeto pode ser executado nos navegadores Chrome, Firefox e Edge

## Run tests

### Initial Setup

1. Requer node. Para instalar, execute `npm install node` ou realize o download [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar as dependencias

### Run Tests

- Execute um dos comando para rodar os seus testes:
- Para rodar todos os testes, execute `npm run test`
- Para rodar testes abrindo a interface do Cypress, execute `npm run cy:open`
- Para executar testes sem abrir a interface do Cypress, execute `npm run cy:run`
- Para gerar os Relatórios do Mochawesome, execute `npm run cy:report`
- Para rodar os testes gerando os Allure Reports, execute `npm run test:allure`
- Para gerar os Allure Reports, execute `npm run allure:open`
- Para executar testes criando o Dashboard do Cypress, execute `npm run cy:dashboard`
<p>
