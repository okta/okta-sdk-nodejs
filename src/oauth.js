const { makeJwt } = require('./jwt');
const Http = require('./http');

function formatParams(obj) {
  var str = [];
  if (obj !== null) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key) &&
          obj[key] !== undefined &&
          obj[key] !== null) {
        str.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }
  if (str.length) {
    return str.join('&');
  } else {
    return '';
  }
}

class OAuth {
  constructor(client) {
    this.client = client;
    this.accessToken = null;
  }

  getAccessToken() {
    if (this.accessToken) {
      return Promise.resolve(this.accessToken);
    }

    const endpoint = '/oauth2/v1/token';
    return this.getJwt(endpoint)
      .then(jwt => {
        const params = formatParams({
          grant_type: 'client_credentials',
          scope: this.client.scopes.join(' '),
          client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
          client_assertion: jwt
        });
        return this.client.requestExecutor.fetch({
          url: `${this.client.baseUrl}${endpoint}`,
          method: 'POST',
          body: params,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      })
      .then(Http.errorFilter)
      .then(res => res.json())
      .then(accessToken => {
        this.accessToken = accessToken;
        return this.accessToken;
      });
  }

  clearCachedAccessToken() {
    this.accessToken = null;
  }

  getJwt(endpoint) {
    return makeJwt(this.client, endpoint)
      .then(jwt => jwt.compact());
  }
}

module.exports = OAuth;
