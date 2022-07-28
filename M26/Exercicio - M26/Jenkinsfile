pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/AndradeTC86/testes-api-cy.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
               powershell 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
              powershell 'npm run cy:run' 
            }
        }
    }
}
