pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                      sh 'scp -r build ubuntu@15.188.52.76:/home/ubuntu/ecoMobility_admin'
                    } catch (err) {
                      currentBuild.result = 'UNSTABLE'
                      throw err
                    }
                }
            }
        }
    }
}
