pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], userRemoteConfigs: [[credentialsId: 'github-auth', url: 'https://github.com/RipanRenaldi25/try-jenkins.git']])
                sh 'ls -l'
            }
        }
        stage('build') {
            steps {
                script {
                    sh '''
                        docker build -t ripanrenaldi25/node-app-build:0.0.3 --target build -f ./Dockerfile.prod .
                        docker build -t ripanrenaldi25/node-app:v0.0.3 --target production -f ./Dockerfile.prod .
                        docker images
                    '''
                }
            }
        }
        stage('package') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-auth', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push ripanrenaldi25/node-app:v0.0.3
                        '''
                    }
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    sh '''
                        docker pull ripanrenaldi25/node-app:v0.0.3
                        docker run -dp 3000:3000 -e PORT_APP="3000" --name node-app ripanrenaldi25/node-app:v0.0.3
                    '''
                }
            }
        }
    }
}