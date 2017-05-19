const assert = require('chai').assert;
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

describe('client.listUsers()', () => {
  it('should return a collection', () => {
    assert.instanceOf(client.listUsers(), require('../../src/collection'));
  });
});

describe('client.listUsers().each()', () => {
  it('should return User models', () => {
    return client.listUsers().each(user => {
      assert.instanceOf(user, models.User);
    });
  });
});

describe('client.listUsers().next()', () => {
  it('should return User models', () => {
    return client.listUsers().next().then(result => {
      assert.instanceOf(result.value, models.User);
    });
  });
  it('should allow me to visit every user', () => {
    const collection = client.listUsers();
    function iter() {
      return collection.next().then(result => {
        if (!result.done) {
          return iter();
        }
      });
    }
    return iter();
  });
});