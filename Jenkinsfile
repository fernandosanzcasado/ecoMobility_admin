pipeline {
    agent any
    
    stages {
        // stage('Build') {
        //     steps {
        //         sh 'npm install'
        //         sh 'rm -r /var/lib/jenkins/workspace/deploy_ecoMobility_webapp_EC2/node_modules' 
        //     }
        // }
        stage('Clear EC2') {
            steps {
                sh 'sudo ssh -i /home/alumne/.ssh/id_rsa ubuntu@13.38.96.212 rm -rf /home/ubuntu/ecoMobility_admin/*'
            }
        }
        stage('SCP Project') {
            steps {
                script {
                    try {
                      sh 'sudo scp -r -i /home/alumne/.ssh/id_rsa /var/lib/jenkins/workspace/deploy_ecoMobility_webapp_EC2/* ubuntu@13.38.96.212:/home/ubuntu/ecoMobility_admin/'
                    } catch (err) {
                      currentBuild.result = 'UNSTABLE'
                      throw err
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                      sh 'sudo ssh -i /home/alumne/.ssh/id_rsa ubuntu@13.38.96.212 ./home/ubuntu/ecoMobility_admin/deploy.sh'
                    } catch (err) {
                      currentBuild.result = 'UNSTABLE'
                      throw err
                    }
                }
            }
        }
    }
}