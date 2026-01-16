import { expect } from 'chai';
import utils = require('../utils');
import {
  Client, Device, DeviceList,
} from '@okta/okta-sdk-nodejs';

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

async function getFirstDevice() {
  const collection = await client.deviceApi.listDevices({
    limit: 1
  });
  const { value: device } = await collection.next(); // access the first item of the collect
  return device;
}

describe('Device API', () => {
  it('lists existing devices', async () => {
    const collection = await client.deviceApi.listDevices();
    for await (const device of collection) {
      expect(device).to.be.instanceOf(DeviceList);
    }
  });

  it('get existing device by id', async () => {
    const testDevice = await getFirstDevice();
    const deviceFromGet = await client.deviceApi.getDevice({
      deviceId: testDevice.id
    });
    expect(deviceFromGet).to.be.instanceOf(Device);
    expect(deviceFromGet.id).to.equal(testDevice.id);
  });

  // TODO: flaky on Bacon
  xit('manage status of device', async () => {
    let testDevice = await getFirstDevice();

    // deactivate
    if (testDevice.status === 'ACTIVE') {
      await client.deviceApi.deactivateDevice({
        deviceId: testDevice.id
      });
      await utils.waitTill(async () => {
        testDevice = await client.deviceApi.getDevice({
          deviceId: testDevice.id
        });
        return testDevice.status === 'DEACTIVATED';
      });
      expect(testDevice.status).to.equal('DEACTIVATED');
    }

    // activate
    if (testDevice.status === 'DEACTIVATED') {
      await client.deviceApi.activateDevice({
        deviceId: testDevice.id
      });
      await utils.waitTill(async () => {
        testDevice = await client.deviceApi.getDevice({
          deviceId: testDevice.id
        });
        return testDevice.status === 'ACTIVE';
      });
      expect(testDevice.status).to.equal('ACTIVE');
    }

    // suspend
    if (testDevice.status === 'ACTIVE') {
      await client.deviceApi.suspendDevice({
        deviceId: testDevice.id
      });
      await utils.waitTill(async () => {
        testDevice = await client.deviceApi.getDevice({
          deviceId: testDevice.id
        });
        return testDevice.status === 'SUSPENDED';
      });
      expect(testDevice.status).to.equal('SUSPENDED');
    }

    // unsuspend
    if (testDevice.status === 'SUSPENDED') {
      await client.deviceApi.unsuspendDevice({
        deviceId: testDevice.id
      });
      await utils.waitTill(async () => {
        testDevice = await client.deviceApi.getDevice({
          deviceId: testDevice.id
        });
        return testDevice.status === 'ACTIVE';
      });
      expect(testDevice.status).to.equal('ACTIVE');
    }
  });
});
