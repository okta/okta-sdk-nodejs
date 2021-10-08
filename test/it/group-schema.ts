import {
  Client,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';


const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Group Schema API', () => {

  it('allows fetching and updating group schema', async () => {
    let groupSchema = await client.updateGroupSchema({
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          customAttribute: null,
          newCustom: null,
        }
      }}
    });


    groupSchema = await client.getGroupSchema();
    expect(Object.keys(groupSchema.definitions)).to.include('base');
    expect(Object.keys(groupSchema.definitions)).to.include('custom');
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.be.empty;

    groupSchema = await client.updateGroupSchema({
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          customAttribute: {
            title: 'Custom Attribute',
            description: 'Custom attribute',
            type: 'string',
            required: false,
          },
        }
      }}
    });
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.contain('customAttribute');

    groupSchema = await client.updateGroupSchema({
      definitions: {custom: {
        id: '#custom',
        type: 'object',
        properties: {
          customAttribute: null
        }
      }}
    });
    expect(Object.keys(groupSchema.definitions.custom.properties)).to.be.empty;
  });
});
