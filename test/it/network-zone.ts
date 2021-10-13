import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  NetworkZone} from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/network-zone`;
}


const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Network Zone API', () => {
  let networkZone: NetworkZone;
  beforeEach(async () => {
    networkZone = await client.createNetworkZone({
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
    });
  });

  afterEach(async () => {
    await client.deleteNetworkZone(networkZone.id);
  });

  it('lists network zones', async () => {
    const collection = client.listNetworkZones();
    const networkZones: NetworkZone[] = [];
    await collection.each(networkZone => networkZones.push(networkZone));
    expect(networkZones).to.be.an('array').that.is.not.empty;
  });

  it('updates network zone', async () => {
    networkZone.name = 'updated network zone';
    const updatedNetworkZone = await networkZone.update();
    expect(updatedNetworkZone.name).to.equal('updated network zone');
  });

  it('activates and deactivates network zone', async () => {
    expect(networkZone.status).to.equal('ACTIVE');
    let response = await networkZone.deactivate();
    expect(response.status).to.equal('INACTIVE');
    let updatedNetworkZone = await client.getNetworkZone(networkZone.id);
    expect(updatedNetworkZone.status).to.equal('INACTIVE');

    response = await networkZone.activate();
    expect(response.status).to.equal('ACTIVE');
    updatedNetworkZone = await client.getNetworkZone(networkZone.id);
    expect(updatedNetworkZone.status).to.equal('ACTIVE');
  });
});
