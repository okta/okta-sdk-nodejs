const assert = require('chai').assert;
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

let userCount = 0;

describe('client.listUsers()', () => {
  it('should return a collection', () => {
    assert.instanceOf(client.listUsers(), require('../../src/collection'));
  });
});

describe('client.listUsers().each()', () => {
  it('should return User models', () => {
    return client.listUsers().each(user => {
      userCount++;
      assert.instanceOf(user, models.User);
    });
  });

  it('should allow me to continue iteration asynchronously, using a promise', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return new Promise((resolve) => {
        setTimeout(resolve.bind(null), 1);
      });
    }).then(() => {
      assert.equal(localCount, userCount);
    });
  });

  it('should allow me to abort iteration synchronously', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return false;
    }).then(() => {
      assert.equal(localCount, 1);
    });
  });

  it('should allow me to abort iteration asynchronously, using a promise', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return new Promise((resolve) => {
        setTimeout(resolve.bind(null, false), 1000);
      });
    }).then(() => {
      assert.equal(localCount, 1);
    });
  });

  it('should stop iteration if the iterator rejects a promise', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return new Promise((resolve, reject) => {
        setTimeout(reject.bind(null, 'foo error'), 1000);
      });
    }).catch((err)=>{
      assert.equal(localCount, 1);
      assert.equal(err, 'foo error');
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
    let localCount = 0;
    function iter(result) {
      localCount++;
      if (result.done) {
        assert.equal(localCount, userCount, 'next() count should be same as each() count');
        return result.value;
      }
      return collection.next().then(iter);
    }
    return collection.next().then(iter);
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
