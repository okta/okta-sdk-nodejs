const assert = require('chai').assert;
const faker = require('faker');
const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

let userCount = 0;

describe('client.listUsers()', () => {
  let _user;

  before(() => {
    const newUser = utils.userWithPassword();
    newUser.profile.nickName = faker.random.uuid();
    return client.createUser(newUser).then(user => _user = user);
  });

  after(() => {
    return _user.deactivate().then(() => _user.delete());
  });

  it('should return a collection', () => {
    assert.instanceOf(client.listUsers(), require('../../src/collection'));
  });

  it('should allow me to perform search queries', () => {
    let foundUser;
    let foundUserCount = 0;
    // The search indexing is not instant, so give it some time to settle
    return utils.delay(2000).then(() => {
      return client.listUsers({
        search: `profile.nickName eq "${_user.profile.nickName}"`
      }).each(user => {
        foundUser = user;
        foundUserCount++;
      }).then(() => {
        assert.isDefined(foundUser, 'The user should be found');
        assert.equal(foundUser.id, _user.id, 'The user should be the right one');
        assert.equal(foundUserCount, 1, 'Other users should not have been matched');
      });
    });
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
        setTimeout(resolve.bind(null));
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
});
