pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('build') {
            steps {
                tools {
                    node "current-nodejs"
                }
                script {
                    sh '''
                        echo 'print version'
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