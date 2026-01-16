import {
  Client,
  DefaultRequestExecutor,
  DetailedHookKeyInstance,
  HookKey,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.inlineHooks.read',
    'okta.inlineHooks.manage'
  ]
});

describe('HookKeyApi', () => {
  let hookKey: DetailedHookKeyInstance;

  it('Create', async () => {
    const name = `node-sdk: HookKey ${faker.random.word()}`.substring(0, 49);
    hookKey = await client.hookKeyApi.createHookKey({
      keyRequest: {
        name
      }
    });
    expect(hookKey.name).to.equal(name);
    expect(hookKey.isUsed).to.equal(false);
  });

  it('List', async () => {
    const hookKeyCollection = await client.hookKeyApi.listHookKeys({});
    const hookKeys: HookKey[] = [];
    await hookKeyCollection.each(hk => hookKeys.push(hk));
    expect(hookKeys.length).to.be.greaterThanOrEqual(1);
    expect(hookKeys.map(hk => hk.keyId)).to.include(hookKey.keyId);
  });

  it('Replace', async () => {
    const name = `node-sdk: HookKey ${faker.random.word()}`.substring(0, 49);
    const updatedHookKey = await client.hookKeyApi.replaceHookKey({
      hookKeyId: hookKey.id,
      keyRequest: {
        name
      }
    });
    expect(updatedHookKey.name).to.equal(name);
    expect(updatedHookKey.isUsed).to.equal(false);
    hookKey = updatedHookKey;
  });

  it('Get public key', async () => {
    const publicKey = await client.hookKeyApi.getPublicKey({
      keyId: hookKey.keyId,
    });
    expect(publicKey.alg).to.exist;
  });

  it('Delete', async () => {
    await client.hookKeyApi.deleteHookKey({
      hookKeyId: hookKey.id
    });

    try {
      hookKey = await client.hookKeyApi.getHookKey({
        hookKeyId: hookKey.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
      hookKey = undefined;
    }
    expect(hookKey).to.be.undefined;
  });
});
