pipeline {
  agent any

  tools {
    nodejs '20.3'
  }

  stages {
    stage('Kiểm tra mã nguồn') {
      steps {
        // Thực hiện các bước kiểm tra mã nguồn ở đây
        sh 'npm install' // Cài đặt các dependencies của ứng dụng
        sh 'npm test' // Chạy kiểm tra mã nguồn
      }
    }
    
    stage('Xây dựng ứng dụng') {
      steps {
        // Thực hiện các bước xây dựng ứng dụng ở đây
        sh 'npm run build' // Xây dựng ứng dụng
      }
    }
  }
}
