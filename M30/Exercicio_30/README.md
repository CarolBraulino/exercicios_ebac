# Testes Mobile Ebac Shop

# Automação de testes Mobile

Este é o repositório para automação de testes Mobile, desenvolvido para trabalhar com WebDriverIO.

## Table of Contents

1. [Goal](#goal)
2. [Initial Setup](#initial-setup)
3. [Run Tests](#run-tests)

## Goal

O objetivo deste repositório é ser de facil entendimento, focado no desenvolvimento de testes automatizados para dispositivos móveis, usando [WebDriverIO](https://webdriver.io/), uma estrutura de automação progressiva criada para automatizar aplicativos modernos da Web e Mobile apps.

## Run tests

### Initial Setup

1. Requer node. Para instalar, execute `npm install node` ou faça o download [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar as dependencias 
3. Para executar os testes localmente no Appium, o `.env` deve ser configurado para usar o  `ENVIRONMENT = local`
4. Para executar os testes no BrowserStack, the `.env` deve ser configurado para usar o `ENVIRONMENT = browserstack`, e deve ser informado o`BS_USER`, `BS_KEY`, `ANDROID_APP_ID`, `IOS_APP_ID`
5. Para executar os testes no BrowserStack, the `.env` deve ser configurado para usar o `ENVIRONMENT = saucelabs`, e deve ser informado o `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`
6. Para executar os testes no Android platform, the `.env` deve ser configurado para usar o `PLATFORM = android`
7. Para executar os testes no iOS platform, the `.env` deve ser configurado para usar o `PLATFORM = ios`

### Run tests

- Execute um dos comandos abaixo para executar os testes.   
- Para executar os testes, execute `npm run test:ios`
- Para gerar os relatórios Allure, execute `npm run report`
<p>