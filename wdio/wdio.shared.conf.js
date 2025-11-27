export const config = {
  specs: ['../test/specs/**/*.js'],
  maxInstances: 3,
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://telnyx.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],
  services: [],
};