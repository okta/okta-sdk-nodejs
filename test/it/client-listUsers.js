const expect = require('chai').expect;
const faker = require('faker');
const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/scenario/list-users `;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
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
    expect(client.listUsers()).to.be.an.instanceof(require('../../src/collection'));
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
        expect(foundUser, 'The user should be found').to.exist;
        expect(foundUser.id, 'The user should be the right one').to.equal(_user.id);
        expect(foundUserCount, 'Other users should not have been matched').to.equal(1);
      });
    });
  });
});

describe('client.listUsers().each()', () => {
  it('should return User models', () => {
    return client.listUsers().each(user => {
      userCount++;
      expect(user).to.be.an.instanceof(models.User);
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
      expect(localCount).to.equal(userCount);
    });
  });

  it('should allow me to abort iteration synchronously', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return false;
    }).then(() => {
      expect(localCount).to.equal(1);
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
      expect(localCount).to.equal(1);
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
      expect(localCount).to.equal(1);
      expect(err).to.equal('foo error');
    });
  });
});

describe('client.listUsers().next()', () => {
  it('should return User models', () => {
    return client.listUsers().next().then(result => {
      expect(result.value).to.be.an.instanceof(models.User);
    });
  });

  it('should allow me to visit every user', () => {
    const collection = client.listUsers();
    let localCount = 0;
    function iter(result) {
      localCount++;
      if (result.done) {
        expect(localCount, 'next() count should be same as each() count').to.equal(userCount);
        return result.value;
      }
      return collection.next().then(iter);
    }
    return collection.next().then(iter);
  });
});
