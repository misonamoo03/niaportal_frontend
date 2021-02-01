module.exports = {
  apps: [
    {
      name: 'niaportal_frontend',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 80,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80,
      },
    },
  ],
};
