# Ebac Cypress

# Automation Test Components with Cypress

This is the repository for automation of web projects, developed to work with Cypress.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Data](#data)
5. [Initial Setup](#initial-setup)
6. [Run Automation](#run-automation)

## Goal

The goal of this repository is to be easy to understand focused on developing automated tests for Web, using [Cypress](https://www.cypress.io/), a tool developed in JavaScript language that provides speed, ease and reliability in the tests.

The architecture developed for this project meets the need to centralize only a single BDD (Behavior Driven Development).

This project can be executed in Chrome, Firefox and Edge browsers

## Project Structure

```
|--- .github
|----- workflows
|--- cypress
|----- fixtures
|----- integration
|-------- cadastro
|-------- carrinho
|-------- checkout
|-------- produtos
|----- plugins
|----- response
|-------- index
|----- support
|-------- page_objects
|-------- commands
|-------- index
|--- cypress.json
|--- package-lock.json
|--- package.json
```

## Features

The features were written using the Gherkin language for BDD (Behavior Driven Development) in English. Each feature corresponds to a specific value stream.

## Data

All data used in the execution of the automated tests will be in a .json file, located inside the "fixtures".

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `npm install` to install dependencies

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run all tests, execute `npm run test`
- To run tests opening the Cypress interface, execute  `npm run cy:open`
- To run tests without opening the Cypress interface, execute  `npm run cy:run`
- To generate the Mochawesome Reports, execute  `npm run cy:report`
- To run tests generating the Allure Reports, execute  `npm run test:allure`
- To generate the Allure Reports, execute `npm run allure:open`
- To run tests creating the Cypress Dashboard, execute  `npm run cy:dashboard`
<p>
