module.exports = {
  apps: [{
    script: 'index.js',
    name: 'totem-socket',
    env: {
      'PORT': 4568,
      'NODE_ENV': 'development'
    },
    env_production: {
      'PORT': 4568,
      'NODE_ENV': 'production'
    }
  }]
};
