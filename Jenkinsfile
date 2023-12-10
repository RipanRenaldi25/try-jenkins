pipeline {
    agent any
    triggers {
        pollSCM '*/1 * * * *'
    }

    stages {
        stage('build') {
            steps {
                tools {
                    nodejs 'recent-nodejs'
                }
                script {
                    sh '''
                        echo "print version"
                        node --version
                    '''
                }
            }
        }
        stage('test') {
            steps {
                script {
                    sh 'testing code'
                    sh 'success'
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    sh 'echo "deploying image"'
                    sh 'echo success'
                }
            }
        }
    }
}