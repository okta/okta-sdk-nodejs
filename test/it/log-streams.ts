import {
  Client,
  DefaultRequestExecutor,
  LogStreamAwsPutSchema,
  LogStreamAws,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.logStreams.read',
    'okta.logStreams.manage'
  ]
});

describe('LogStreamApi', () => {
  let logStream: LogStreamAws;

  it('Create', async () => {
    const name = `node-sdk: LogStream ${faker.random.word()}`.substring(0, 49);
    const eventSourceName = `node-sdk-${faker.random.word()}`;
    const logStreamRequest: LogStreamAwsPutSchema = {
      type: 'aws_eventbridge',
      name,
      settings: {
        eventSourceName,
        accountId: '123456789012',
        region: 'us-east-2'
      }
    };
    logStream = await client.logStreamApi.createLogStream({
      instance: logStreamRequest
    }) as LogStreamAws;
    expect(logStream.name).to.equal(name);
    expect(logStream.type).to.equal('aws_eventbridge');
    expect(logStream.settings.eventSourceName).to.equal(eventSourceName);
    expect(logStream.settings.region).to.equal('us-east-2');
  });

  it('Update', async () => {
    const name = `node-sdk: LogStream ${faker.random.word()}`.substring(0, 49);
    const logStreamRequest: LogStreamAwsPutSchema = {
      name,
      type: logStream.type,
      settings: logStream.settings,
    };
    await client.logStreamApi.replaceLogStream({
      logStreamId: logStream.id,
      instance: logStreamRequest
    });
    logStream = await client.logStreamApi.getLogStream({
      logStreamId: logStream.id
    }) as LogStreamAws;
    expect(logStream.name).to.equal(name);
    expect(logStream.settings.region).to.equal('us-east-2');
  });

  it('List', async () => {
    const logStreamCollection = await client.logStreamApi.listLogStreams({
      filter: 'type eq "aws_eventbridge"'
    });
    const logStreams: LogStreamAws[] = [];
    await logStreamCollection.each(ls => logStreams.push(ls as LogStreamAws));
    expect(logStreams.length).to.be.greaterThanOrEqual(1);
    expect(logStreams.map(ls => ls.name)).to.include(logStream.name);
  });

  it('Activate', async () => {
    await client.logStreamApi.activateLogStream({
      logStreamId: logStream.id,
    });
    logStream = await client.logStreamApi.getLogStream({
      logStreamId: logStream.id
    }) as LogStreamAws;
    expect(logStream.status).to.equal('ACTIVE');
  });

  it('Deactivate', async () => {
    await client.logStreamApi.deactivateLogStream({
      logStreamId: logStream.id,
    });
    logStream = await client.logStreamApi.getLogStream({
      logStreamId: logStream.id
    }) as LogStreamAws;
    expect(logStream.status).to.equal('INACTIVE');
  });

  it('Delete', async () => {
    await client.logStreamApi.deleteLogStream({
      logStreamId: logStream.id,
    });

    try {
      logStream = await client.logStreamApi.getLogStream({
        logStreamId: logStream.id
      }) as LogStreamAws;
    } catch (e) {
      expect(e.status).to.equal(404);
      logStream = undefined;
    }
    expect(logStream).to.be.undefined;
  });
});
