pipeline {
  agent any

  stages {
    stage(' Merge dev to main') {
      steps {
        // checkout the repository
        git credentialsId: 'github-token', url: 'https://github.com/trongthienpc/learn-jenkins'

        // switch to the main branch
        sh 'git checkout main'

        // merge dev branch to the main branch
        sh 'git merge dev'

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
