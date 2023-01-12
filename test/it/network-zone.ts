import { expect } from 'chai';
import { spy } from 'sinon';
import {
  DefaultRequestExecutor,
  NetworkZone,
  Client
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/network-zone`;
}


const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

const buildBlockedNetworkZone = (): NetworkZone => {
  return {
    type: 'IP',
    id: null,
    name: 'newBlockedNetworkZone',
    status: 'ACTIVE',
    created: null,
    lastUpdated: null,
    gateways: [
      {
        type: 'RANGE',
        value: '123.123.123.123-123.123.123.123'
      }
    ],
    proxies: null
  };
};

const buildNetworkZone = (): NetworkZone => {
  return {
    type: 'IP',
    id: null,
    name: 'newNetworkZone',
    status: 'ACTIVE',
    created: null,
    lastUpdated: null,
    gateways: [
      {
        type: 'CIDR',
        value: '1.2.3.4/24'
      },
      {
        type: 'CIDR',
        value: '2.3.4.5/24'
      }
    ],
    proxies: [
      {
        type: 'CIDR',
        value: '2.2.3.4/24'
      },
      {
        type: 'CIDR',
        value: '3.3.4.5/24'
      }
    ]
  };
};

describe('Network Zone CRUD', () => {
  let networkZone: NetworkZone;
  beforeEach(async () => {
    networkZone = await client.networkZoneApi.createNetworkZone({
      zone: buildNetworkZone()
    });
  });

  afterEach(async () => {
    await client.networkZoneApi.deleteNetworkZone({
      zoneId: networkZone.id
    });
  });

  it('lists network zones', async () => {
    const collection = await client.networkZoneApi.listNetworkZones();
    const networkZones: NetworkZone[] = [];
    await collection.each(async networkZone => networkZones.push(networkZone));
    expect(networkZones).to.be.an('array').that.is.not.empty;
  });

  it('updates network zone', async () => {
    networkZone.name = 'updated network zone';
    const updatedNetworkZone = await client.networkZoneApi.replaceNetworkZone({
      zoneId: networkZone.id, 
      zone: networkZone
    });
    expect(updatedNetworkZone.name).to.equal('updated network zone');
  });

  it('activates and deactivates network zone', async () => {
    expect(networkZone.status).to.equal('ACTIVE');
    let response = await client.networkZoneApi.deactivateNetworkZone({ zoneId: networkZone.id });
    expect(response.status).to.equal('INACTIVE');
    let updatedNetworkZone = await client.networkZoneApi.getNetworkZone({ zoneId: networkZone.id });
    expect(updatedNetworkZone.status).to.equal('INACTIVE');

    response = await client.networkZoneApi.activateNetworkZone({ zoneId: networkZone.id });
    expect(response.status).to.equal('ACTIVE');
    updatedNetworkZone = await client.networkZoneApi.getNetworkZone({ zoneId: networkZone.id });
    expect(updatedNetworkZone.status).to.equal('ACTIVE');
  });
});

describe('List Network Zones', () => {
  let networkZones: Array<NetworkZone>;
  before(async () => {
    networkZones = [];
    const namePrefixes = [
      'NZ_POLICY',
      'NZ_BLOCKLIST'
    ];
    for (const prefix of namePrefixes) {
      for (let i = 0 ; i < 2 ; i++) {
        const networkZone = await client.networkZoneApi.createNetworkZone({
          zone: {
            ...(prefix === 'NZ_POLICY' ? buildNetworkZone() : buildBlockedNetworkZone()),
            name: `node-sdk: ${prefix} ${i} ${faker.random.word()}`.substring(0, 49),
            usage: prefix === 'NZ_POLICY' ? 'POLICY' : 'BLOCKLIST'
          }
        });
        networkZones.push(networkZone);
      }
    }
  });

  after(async () => {
    for (const networkZone of networkZones) {
      await client.networkZoneApi.deleteNetworkZone({ zoneId: networkZone.id });
    }
  });

  it('should paginate results', async () => {
    const filtered = new Set();
    const collection = await client.networkZoneApi.listNetworkZones({ limit: 3 });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(nz => {
      expect(nz).to.be.an.instanceof(NetworkZone);
      expect(filtered.has(nz.name)).to.be.false;
      filtered.add(nz.name);
    });
    expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);
    expect(filtered.size).to.be.greaterThanOrEqual(4);
  });

  // Pagination does not work with filter
  it('should filter with filter', async () => {
    const queryParameters = {
      filter: 'usage eq "POLICY"'
    };
    const filtered = new Set();
    await (await client.networkZoneApi.listNetworkZones(queryParameters)).each(nz => {
      expect(nz).to.be.an.instanceof(NetworkZone);
      expect(filtered.has(nz.name)).to.be.false;
      filtered.add(nz.name);
      expect(nz.name.indexOf('node-sdk: NZ_BLOCKLIST')).to.equal(-1);
    });
    expect(filtered.size).to.be.greaterThanOrEqual(2);
  });
});
