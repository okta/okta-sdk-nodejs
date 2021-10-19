import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  NetworkZone,
  NetworkZoneAddressType,
  NetworkZoneStatus,
  NetworkZoneType} from '@okta/okta-sdk-nodejs';

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
      type: NetworkZoneType.Ip,
      id: null,
      name: 'newNetworkZone',
      status: NetworkZoneStatus.Active,
      created: null,
      lastUpdated: null,
      gateways: [
        {
          type: NetworkZoneAddressType.Cidr,
          value: '1.2.3.4/24'
        },
        {
          type: NetworkZoneAddressType.Cidr,
          value: '2.3.4.5/24'
        }
      ],
      proxies: [
        {
          type: NetworkZoneAddressType.Cidr,
          value: '2.2.3.4/24'
        },
        {
          type: NetworkZoneAddressType.Cidr,
          value: '3.3.4.5/24'
        }
      ]
    });
  });

  afterEach(async () => {
    await client.deleteNetworkZone(networkZone.id);
  });

  it('lists network zones', async () => {
    const collection = await client.listNetworkZones();
    const networkZones: NetworkZone[] = [];
    await collection.forEach(networkZone => networkZones.push(networkZone));
    expect(networkZones).to.be.an('array').that.is.not.empty;
  });

  it('updates network zone', async () => {
    networkZone.name = 'updated network zone';
    const updatedNetworkZone = await client.updateNetworkZone(networkZone.id, networkZone);
    // const updatedNetworkZone = await networkZone.update();
    expect(updatedNetworkZone.name).to.equal('updated network zone');
  });

  it('activates and deactivates network zone', async () => {
    expect(networkZone.status).to.equal('ACTIVE');
    let response = await client.deactivateNetworkZone(networkZone.id);
    // let response = await networkZone.deactivate();
    expect(response.status).to.equal(200);
    let updatedNetworkZone = await client.getNetworkZone(networkZone.id);
    expect(updatedNetworkZone.status).to.equal('INACTIVE');

    response = await client.activateNetworkZone(networkZone.id);
    expect(response.status).to.equal(200);
    updatedNetworkZone = await client.getNetworkZone(networkZone.id);
    expect(updatedNetworkZone.status).to.equal('ACTIVE');
  });
});
