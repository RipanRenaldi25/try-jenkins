pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('build') {
            tools {
                nodejs 'recent-nodejs'
            }
            steps {
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
                    sh 'echo testing code'
                    sh 'echo success'
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