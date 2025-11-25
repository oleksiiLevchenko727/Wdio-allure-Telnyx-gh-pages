import { config as sharedConfig } from './wdio.shared.conf.js';

export const config = {
  ...sharedConfig,
  services: [],
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--headless', '--width=1920', '--height=1080'],
      },
    },
  ],
};