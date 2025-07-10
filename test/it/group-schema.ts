
import faker = require('@faker-js/faker');
import { expect } from 'chai';

import { Client, GroupSchema } from '@okta/okta-sdk-nodejs';

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

const getCustomPropertiesKeys = (groupSchema: GroupSchema) => {
  // exclude default custom properties
  return Object.keys(groupSchema.definitions.custom.properties).filter(k => !['endUserDisplayName', 'endUserDisplayDescription'].includes(k));
};

describe('Group Schema API', () => {
  it('allows fetching and updating group schema', async () => {
    const customAttributeName = faker.random.word();
    let groupSchema = await client.schemaApi.getGroupSchema();
    expect(Object.keys(groupSchema.definitions)).to.include('base');
    expect(Object.keys(groupSchema.definitions)).to.include('custom');
    expect(getCustomPropertiesKeys(groupSchema)).to.be.empty;

    groupSchema = await client.schemaApi.updateGroupSchema({GroupSchema: {
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
    }});
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.contain(customAttributeName);

    groupSchema = await client.schemaApi.updateGroupSchema({GroupSchema: {
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          [customAttributeName]: null
        }
      }}
    }});
    expect(getCustomPropertiesKeys(groupSchema)).to.be.empty;
  });
});
