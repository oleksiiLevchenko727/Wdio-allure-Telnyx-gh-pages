import { config as sharedConfig } from './wdio.shared.conf.js';

export const config = {
  ...sharedConfig,
  services: [],
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--headless=new',
          '--window-size=1920,1080',
        ],
      },
    },
  ],
};