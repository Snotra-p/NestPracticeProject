module.exports = {
  apps : [{
    name: 'board-app',
    script: 'npm',
    args: 'start:prod',
    // watch: '.',
    // ignore_watch: ["node_modules"],
    instances: 2, // 0 - cpu 최대 갯수 만큼 
    exec_mode: 'cluster', // 클러스트 모드
    // wait_ready: true, //
    // listen_timeout: 50000,
    // kill_timeout: 5000,
    env: {
      PORT: 5336,
      NODE_ENV: "development", // 개발환경시 적용될 설정 지정
    },
    env_production: {
      PORT: 3000,
      NODE_ENV: "production", // 배포환경시 적용될 설정 지정
    },
  }], 
};

