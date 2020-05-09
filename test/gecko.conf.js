exports.config = {
  directConnect: true,
  specs: ['./spec.js'],
  directConnect: true,
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  },

  plugins: [
    {
      path: '../'
    }
  ]
}
