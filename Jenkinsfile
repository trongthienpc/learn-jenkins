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
        // build the docker image
        sh 'Docker build -t hello-app:latest .'
      }
    }
  }
}
