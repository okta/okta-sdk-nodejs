const { makeJwt } = require('./jwt');

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
    this.jwt = null;
  }

  getAccessToken() {
    return this.getJwt()
      .then(jwt => {
        const params = formatParams({
          grant_type: 'client_credentials',
          scope: this.client.scopes.join(' '),
          client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
          client_assertion: jwt
        });
        return this.client.requestExecutor.fetch({
          url: `${this.client.baseUrl}/oauth2/v1/token`,
          method: 'POST',
          body: params,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      });
  }

  getJwt() {
    if (!this.jwt) {
      return makeJwt(this.client)
        .then(jwt => {
          this.jwt = jwt.compact();
          return this.jwt;
        });
    }
    return Promise.resolve(this.jwt);
  }
}

module.exports = OAuth;
