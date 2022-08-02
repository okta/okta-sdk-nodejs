import { expect } from 'chai';
import {
  Client,
  v3 } from '@okta/okta-sdk-nodejs';

import getMockAssurancePolicy = require('./mocks/device-assurance-policy');


const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Device Assurance API', () => {
  let deviceAssurancePolicy;
  beforeEach(async () => {
    deviceAssurancePolicy = await client.deviceAssuranceApi.createDeviceAssurancePolicy({
      deviceAssurance: getMockAssurancePolicy()
    });
  });

  afterEach(async () => {
    await client.deviceAssuranceApi.deleteDeviceAssurancePolicy({
      deviceAssuranceId: deviceAssurancePolicy.id
    });
  });

  it('lists existing device assurance policies', async () => {
    const collection = await client.deviceAssuranceApi.listDeviceAssurancePolicies();
    for await (const policy of collection) {
      expect(policy).to.be.instanceOf(v3.DeviceAssurance);
    }
  });

  it('get device assurance policy by id', async () => {
    const retrievedPolicy = await client.deviceAssuranceApi.getDeviceAssurancePolicy({
      deviceAssuranceId: deviceAssurancePolicy.id
    });
    expect(retrievedPolicy.id).to.equal(deviceAssurancePolicy.id);
  });

  it('updates device assurance policy', async () => {
    const mockPolicy = getMockAssurancePolicy();
    mockPolicy.osVersion.minimum = '14.0.0';
    const updatedPolicy = await client.deviceAssuranceApi.updateDeviceAssurancePolicy({
      deviceAssuranceId: deviceAssurancePolicy.id,
      deviceAssurance: mockPolicy
    });
    expect(updatedPolicy.osVersion.minimum).to.equal('14.0.0');
  });
});
