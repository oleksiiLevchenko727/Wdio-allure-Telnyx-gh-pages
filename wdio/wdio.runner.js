import { config as chromeConfig } from './wdio.chrome.conf.js';
import { config as firefoxConfig } from './wdio.firefox.conf.js';

const browser = process.env.BROWSER || 'chrome';

let config;

if (browser === 'chrome') config = chromeConfig;
else if (browser === 'firefox') config = firefoxConfig;
else throw new Error(`Unsupported browser: ${browser}`);

export { config };