pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/Calsimm/testes-api-cy.git' 
            }
        }
        stage('Instalar dependencias') {
            steps {
               bat 'npm install'
            }
        }
        stage('Subir o servidor'){
            steps {
                bat 'npm start'
            }
        }
        stage('Executar testes') {
            steps {
               bat 'npm run cy:run'
            }
        }
    }
}