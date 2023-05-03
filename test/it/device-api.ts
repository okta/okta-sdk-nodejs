import { expect } from 'chai';
import {
  Client, Device,
} from '@okta/okta-sdk-nodejs';

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Device API', () => {
  beforeEach(async () => {
  });

  afterEach(async () => {
  });

  it('lists existing devices', async () => {
    const collection = await client.deviceApi.listDevices();
    for await (const device of collection) {
      expect(device).to.be.instanceOf(Device);
      console.log(1, device);
    }
  });
});
