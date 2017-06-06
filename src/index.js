const ApiClient = require('./api-client');
const ConfigLoader = require('./config-loader');

const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';

function clientBuilder(config) {

  const configLoader = new ConfigLoader();
  configLoader.applyDefaults();
  configLoader.apply(config || {});

  if (!configLoader.config.orgUrl) {
    throw new Error(`Okta Org URL not provided, see ${repoUrl} for usage.`);
  }

  if (!configLoader.config.token) {
    throw new Error(`Okta API token not provided, see ${repoUrl} for usage.`);
  }

  return new ApiClient(configLoader.config.client);
}

module.exports = {
  Client: clientBuilder
};
