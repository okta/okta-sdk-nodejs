const os = require('os');
const package = require('../package.json');

const ConfigLoader = require('./config-loader');
const GeneratedApiClient = require('./generated-client');
const Http = require('./http');
const DEFAULT_USER_AGENT = `${package.name}/${package.version} node/${process.versions.node} node/${os.platform()}/${os.release()}`;
const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';

/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 */
class Client extends GeneratedApiClient {
  constructor(clientConfig) {
    super();
    const configLoader = new ConfigLoader();
    configLoader.applyDefaults();
    configLoader.apply({
      client: clientConfig || {}
    });

    const parsedConfig = configLoader.config;

    if (!parsedConfig.client.orgUrl) {
      throw new Error(`Okta Org URL not provided, see ${repoUrl} for usage.`);
    }

    if (!parsedConfig.client.token) {
      throw new Error(`Okta API token not provided, see ${repoUrl} for usage.`);
    }

    this.baseUrl = parsedConfig.client.orgUrl.replace(/\/$/, '');
    this.apiToken = parsedConfig.client.token;
    this.http = new Http();
    this.http.defaultHeaders.Authorization = `SSWS ${this.apiToken}`;
    this.http.defaultHeaders['User-Agent'] = parsedConfig.client.userAgent ? parsedConfig.client.userAgent + ' ' + DEFAULT_USER_AGENT : DEFAULT_USER_AGENT;
  }
}

module.exports = Client;
