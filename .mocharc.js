process.env.TS_NODE_PROJECT = './test/it/tsconfig.json';

let config = {
  require: [
    'ts-node/register',
    'tsconfig-paths/register'
  ],
  extension: [
    'ts', 'js'
  ],
  timeout: 0
};

if (process.env.TEST_TYPE === 'it') {
  config = {
    ...config,
    reporter: 'mocha-multi-reporters',
    reporterOptions: [
      'configFile=.mocha-multi-it.json',
    ],
    retries: 2,
  };
} else if (process.env.TEST_TYPE === 'unit') {
  config = {
    ...config,
    reporter: 'mocha-multi-reporters',
    reporterOptions: [
      'configFile=.mocha-multi-unit.json',
    ],
  };
}

module.exports = config;
