pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('build') {
            steps {
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
                    sh 'deploying image'
                    sh 'success'
                }
            }
        }
    }
}