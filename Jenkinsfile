pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Release') {
            steps {
                sh 'npm run start'
            }
        }
    }
}