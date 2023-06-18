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

    stage('Build docker image') {
      steps {
         // Configure Docker executable path
        script {
          def dockerHome = tool 'docker'
          env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        // build the docker image
        script {
          docker.build("hello-app-1")
        }
      }
    }
  }
}
