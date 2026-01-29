import {
  Client,
  DefaultRequestExecutor,
  EmailServerResponse,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.emailServers.read',
    'okta.emailServers.manage'
  ]
});

describe('EmailServerApi', () => {
  let emailServer: EmailServerResponse;
  let emailServerHost: string;

  it('Create', async () => {
    emailServerHost = faker.internet.domainName();
    const alias = `node-sdk: ${faker.random.word()}`;
    const username: string = faker.internet.userName();
    emailServer = await client.emailServerApi.createEmailServer({
      emailServerPost: {
        host: emailServerHost,
        alias,
        username,
        password: 'Abcd1234#@',
        port: 587,
      }
    });
  });

  it('List', async () => {
    const emailServerList = await client.emailServerApi.listEmailServers({});
    expect(emailServerList.map(es => es.host)).to.include(emailServerHost);
  });

  it('Get', async () => {
    const emailServerFromGet = await client.emailServerApi.getEmailServer({
      emailServerId: emailServer.id
    });
    expect(emailServerFromGet.host).to.equal(emailServer.host);
  });

  xit('Test', async () => {
    const from = 'test@oktapreview.com';
    const to = faker.internet.email(faker.random.word(), faker.random.word(), emailServerHost);
    await client.emailServerApi.testEmailServer({
      emailServerId: emailServer.id,
      emailTestAddresses: {
        fromAddress: from,
        toAddress: to,
      }
    });
  });

  it('Delete', async () => {
    await client.emailServerApi.deleteEmailServer({
      emailServerId: emailServer.id
    });

    try {
      emailServer = await client.emailServerApi.getEmailServer({
        emailServerId: emailServer.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
      emailServer = undefined;
    }
    expect(emailServer).to.be.undefined;
  });
});
