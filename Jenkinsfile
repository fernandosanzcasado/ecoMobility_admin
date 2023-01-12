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
                      sh 'sudo /var/lib/jenkins/workspace/deploy_ecoMobility_webapp_EC2/jenkins.sh'
                    } catch (err) {
                      currentBuild.result = 'UNSTABLE'
                      throw err
                    }
                }
            }
        }
    }
}
