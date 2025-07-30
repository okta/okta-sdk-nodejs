import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  FederatedClaim,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('ApplicationSSOFederatedClaimsApi', () => {
  let application: OpenIdConnectApplication;
  let claim: FederatedClaim;

  before(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOIDCApplication()
    }) as OpenIdConnectApplication;
  });

  after(async () => {
    if (claim) {
      await client.applicationApi.deleteFederatedClaim({
        appId: application.id,
        claimId: claim.id,
      });
    }
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });

  it('Create', async () => {
    claim = await client.applicationApi.createFederatedClaim({
      appId: application.id,
      federatedClaimRequestBody: {
        expression: '11',
        name: `node-sdk: Claim ${faker.random.word()}`.substring(0, 49)
      }
    });
    expect(claim.expression).to.eq('11');
  });

  it('List claims', async () => {
    const claimCollection = await client.applicationApi.listFederatedClaims({
      appId: application.id,
    });
    const claims: FederatedClaim[] = [];
    await claimCollection.each(cl => claims.push(cl));
    expect(claims.length).to.equal(1);
    expect(claims[0].expression).to.equal('11');
  });

  it('Update', async () => {
    const newClaim = await client.applicationApi.replaceFederatedClaim({
      appId: application.id,
      claimId: claim.id,
      federatedClaim: {
        ...claim,
        expression: '22',
      }
    });
    expect(newClaim.expression).to.equal('22');
    expect(newClaim.id).to.equal(claim.id);
  });

  it('Delete', async () => {
    await client.applicationApi.deleteFederatedClaim({
      appId: application.id,
      claimId: claim.id,
    });
    try {
      claim = await client.applicationApi.getFederatedClaim({
        appId: application.id,
        claimId: claim.id,
      });
    } catch (e) {
      expect(e.status).to.equal(404);
      claim = undefined;
    }
    expect(claim).to.equal(undefined);
  });
});
