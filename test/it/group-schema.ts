
import faker = require('@faker-js/faker');
import { expect } from 'chai';

import {
} from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

const client: V2Client = utils.getV2Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Group Schema API', () => {
  it('allows fetching and updating group schema', async () => {
    const customAttributeName = faker.random.word();
    let groupSchema = await client.getGroupSchema();
    expect(Object.keys(groupSchema.definitions)).to.include('base');
    expect(Object.keys(groupSchema.definitions)).to.include('custom');
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.be.empty;

    groupSchema = await client.updateGroupSchema({
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          [customAttributeName]: {
            title: 'Custom Attribute',
            description: 'Custom attribute',
            type: 'string',
            required: false,
          },
        }
      }}
    });
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.contain(customAttributeName);

    groupSchema = await client.updateGroupSchema({
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          [customAttributeName]: null
        }
      }}
    });

    expect(Object.keys(groupSchema.definitions.custom.properties)).to.be.empty;
  });
});
