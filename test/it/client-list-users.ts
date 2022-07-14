import { expect } from 'chai';

import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3 } from '@okta/okta-sdk-nodejs';

import utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-users`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listUsers()', () => {
  let _user;

  before(async () => {
    const newUser = {
      profile: utils.getMockProfile('client-list-users-1'),
      credentials: {
        password: {value: 'Abcd1234#@'}
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    // Add an unmapped property to the user profile
    newUser.profile.nickName = 'Nicky';

    _user = await client.createUser(newUser);
  });

  after(async () => {
    await utils.cleanup(client, _user);
  });

  it('should return a collection', async () => {
    expect(await client.listUsers()).to.be.an.instanceof(Collection);
  });

  it('should allow me to perform search queries', async () => {
    let foundUser;
    let foundUserCount = 0;
    // The search indexing is not instant, so give it some time to settle

    await utils.delay(2000);
    const queryParameters = { search: `profile.nickName eq "${_user.profile.nickName}"` };
    await (await client.listUsers(queryParameters)).each(user => {
      // If tests run in parallel (for different node versions on travis), it might match a different user without this check
      if (user.id === _user.id) {
        foundUser = user;
        foundUserCount++;
        return false; // abort iteration after user is found
      }
    });

    expect(foundUser, 'The user should be found').to.exist;
    expect(foundUser.id, 'The user should be the right one').to.equal(_user.id);
    expect(foundUserCount, 'Other users should not have been matched').to.equal(1);
  });
});

describe('client.listUsers({ })', () => {
  const users = [];

  const createUser = async (name) => {
    const newUser = {
      profile: {
        ...utils.getMockProfile(name),
        lastName: 'okta-sdk-nodejs-users-filter',
      },
      credentials: {
        password: {value: 'Abcd1234#@'}
      }
    };
    await utils.cleanup(client, newUser);
    const createdUser = await client.createUser(newUser);
    return createdUser;
  };

  before(async () => {
    const stagedUser = await createUser('client-list-users-staged');
    await client.deactivateUser(stagedUser.id);
    users.push(stagedUser);
    users.push(await createUser('client-list-users'));
    users.push(await createUser('client-list-users-filtered-1'));
    users.push(await createUser('client-list-users-filtered-2'));
    // The search indexing is not instant, so give it some time to settle
    await utils.delay(5000);
  });

  after(async () => {
    await utils.cleanup(client, users);
  });

  it('should filter users with filter and paginate results', async () => {
    const queryParameters = {
      filter: 'status eq "ACTIVE" AND profile.lastName eq "okta-sdk-nodejs-users-filter"',
      limit: 2
    };
    const filtered = new Set();
    await (await client.listUsers(queryParameters)).each(user => {
      expect(user).to.be.an.instanceof(v3.User);
      expect(user.profile.lastName).to.eq('okta-sdk-nodejs-users-filter');
      expect(filtered.has(user.profile.firstName)).to.be.false;
      filtered.add(user.profile.firstName);
    });
    expect(filtered.size).to.equal(3);
  });

  it('should filter users with search and paginate results', async () => {
    const queryParameters = {
      search: 'status eq "ACTIVE" AND profile.lastName eq "okta-sdk-nodejs-users-filter"',
      limit: 2
    };
    const filtered = new Set();
    await (await client.listUsers(queryParameters)).each(user => {
      expect(user).to.be.an.instanceof(v3.User);
      expect(user.profile.lastName).to.eq('okta-sdk-nodejs-users-filter');
      expect(filtered.has(user.profile.firstName)).to.be.false;
      filtered.add(user.profile.firstName);
    });
    expect(filtered.size).to.equal(3);
  });

  // TODO: OKTA-515269 - incompatibility in v2 and v3 specs
  xit('should search users with q', async () => {
    const queryParameters = {
      q: 'client-list-users-filtered'
    };
    const filtered = new Set();
    await (await client.listUsers(queryParameters)).each(user => {
      expect(user).to.be.an.instanceof(v3.User);
      expect(user.profile.firstName).to.match(new RegExp('client-list-users-filtered'));
      expect(filtered.has(user.profile.firstName)).to.be.false;
      filtered.add(user.profile.firstName);
    });
    expect(filtered.size).to.equal(2);
  });
});

describe('client.listUsers().each()', () => {
  it('should allow me to iterate the entire collection and return User models', async () => {
    await (await client.listUsers()).each(user => {
      expect(user).to.be.an.instanceof(v3.User);
    });
  });

  it('should allow me to abort iteration synchronously', async () => {
    let localCount = 0;
    await (await client.listUsers()).each(() => {
      localCount++;
      return false;
    });
    expect(localCount).to.equal(1);
  });

  it('should allow me to abort iteration asynchronously, using a promise', async () => {
    let localCount = 0;
    return (await client.listUsers()).each(() => {
      localCount++;
      return new Promise((resolve) => {
        setTimeout(resolve.bind(null, false), 1000);
      });
    })
      .then(() => {
        expect(localCount).to.equal(1);
      });
  });

  it('should stop iteration if the iterator rejects a promise', async () => {
    let localCount = 0;
    return (await client.listUsers()).each(() => {
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
  let _user;

  before(async () => {
    const newUser = {
      profile: utils.getMockProfile('client-list-users-2'),
      credentials: {
        password: {value: 'Abcd1234#@'}
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    // Add an unmapped property to the user profile
    newUser.profile.nickName = 'Nicky';

    _user = await client.createUser(newUser);
  });

  after(async () => {
    await utils.cleanup(client, _user);
  });

  it('should return User models', async () => {
    const collection = await client.listUsers();
    return collection.next()
      .then(result => {
        expect(result.value).to.be.an.instanceof(v3.User);
      });
  });

  it('should allow me to visit every user', async () => {
    const collection = await client.listUsers();
    let localCount = 0;
    function iter(result) {
      localCount++;
      if (result.done) {
        expect(localCount, 'next() count should be greater than 1').to.greaterThan(1);
        return result.value;
      }
      return collection.next()
        .then(iter);
    }
    return collection.next()
      .then(iter);
  });
});
