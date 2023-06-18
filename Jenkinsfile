pipeline {
  agent any

  stages {
    stage(' Merge dev to main') {
      steps {
       
        // switch to the main branch
        sh 'git checkout main'

        // merge dev branch to the main branch
        sh 'git merge origin/dev'

        // push the changes to the remote branch
        sh 'git push origin main'
      }
    }

    stage('Setup Docker') {
      steps {
          // Configure Docker executable path
          script {
              def dockerHome = tool 'docker'
              env.PATH = "${dockerHome}/bin:${env.PATH}"
          }
      }
  }

    stage('Build docker image') {
      steps {
        // build the docker image
        sh 'Docker build -t hello-app:latest .'
      }
    }
  }
}
