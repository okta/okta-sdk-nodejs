const os = require('os');
const package = require('../package.json');

const Http = require('./http');
const DEFAULT_USER_AGENT = `${package.name}/${package.version} node/${process.versions.node} node/` + os.platform() + '/' + os.release();

/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 */
class Client {
  constructor(opts) {
    this.baseUrl = opts.orgUrl.replace(/\/$/, '');
    this.apiToken = opts.token;
    this.http = new Http();
    this.http.defaultHeaders.Authorization = `SSWS ${this.apiToken}`;
    this.http.defaultHeaders['User-Agent'] = opts.userAgent ? opts.userAgent + ' ' + DEFAULT_USER_AGENT : DEFAULT_USER_AGENT;
  }
}

module.exports = Client;