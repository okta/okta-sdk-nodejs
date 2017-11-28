const expect = require('chai').expect;
const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');
const collection = require('../../src/collection');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-users`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

let userCount = 0;

describe('client.listUsers()', () => {
  let _user;

  before(async () => {
    let newUser = {
      profile: {
        firstName: 'John',
        lastName: 'List-Users',
        email: 'john-list-users@example.com',
        login: 'john-list-users@example.com'
      },
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    // Add an unmapped property to the user profile
    newUser.profile.nickName = 'johny-list-users';

    _user = await client.createUser(newUser);
  });

  after(async () => {
    await utils.cleanup(client, _user);
  });

  it('should return a collection', () => {
    expect(client.listUsers()).to.be.an.instanceof(collection);
  });

  it('should allow me to perform search queries', async () => {
    let foundUser;
    let foundUserCount = 0;
    // The search indexing is not instant, so give it some time to settle

    await utils.delay(2000);
    let queryParameters = { search: `profile.nickName eq "${_user.profile.nickName}"` };
    await client.listUsers(queryParameters).each(user => {
      foundUser = user;
      foundUserCount++;
    });

    expect(foundUser, 'The user should be found').to.exist;
    expect(foundUser.id, 'The user should be the right one').to.equal(_user.id);
    expect(foundUserCount, 'Other users should not have been matched').to.equal(1);
  });
});

describe('client.listUsers().each()', () => {
  it('should return User models', async () => {
    await client.listUsers().each(user => {
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
    })
    .then(() => {
      expect(localCount).to.equal(userCount);
    });
  });

  it('should allow me to abort iteration synchronously', async () => {
    let localCount = 0;
    await client.listUsers().each(() => {
      localCount++;
      return false;
    });
    expect(localCount).to.equal(1);
  });

  it('should allow me to abort iteration asynchronously, using a promise', () => {
    let localCount = 0;
    return client.listUsers().each(() => {
      localCount++;
      return new Promise((resolve) => {
        setTimeout(resolve.bind(null, false), 1000);
      });
    })
    .then(() => {
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
    return client.listUsers().next()
    .then(result => {
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
      return collection.next()
      .then(iter);
    }
    return collection.next()
    .then(iter);
  });
});
