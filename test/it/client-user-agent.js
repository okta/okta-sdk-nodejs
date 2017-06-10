const assert = require('chai').assert;
const http = require('http');
const okta = require('../../');

describe('Client User Agent', () => {
  let port;
  let client;
  let mockOrgUrl;

  before(() => {
    const server = http.createServer((req, res) => {
      res.end(req.headers['user-agent']);
    });
    server.listen();
    port = server.address().port;
    mockOrgUrl = `http://127.0.0.1:${port}`;
    client = new okta.Client({
      orgUrl: mockOrgUrl,
      token: 'foo'
    });
  });

  it('should match the expected format', () => {
    const sdkRegex = new RegExp(/@okta\/okta-sdk-nodejs\/[0-9\.]+ node\/[0-9\.]+ .+/);
    assert.match(client.http.defaultHeaders['User-Agent'], sdkRegex);
  });

  it('should be sent when making requests', () => {
    return client.http.http(mockOrgUrl).then(response => {
      response.text().then(text => {
        assert.equal(text, client.http.defaultHeaders['User-Agent']);
      });
    });
  });
});
