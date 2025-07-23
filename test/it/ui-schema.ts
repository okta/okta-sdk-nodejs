import {
  Client,
  DefaultRequestExecutor,
  UISchemasResponseObject,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.uischemas.read',
    'okta.uischemas.manage',
  ]
});

describe('UISchemaApi', () => {
  let uiSchema: UISchemasResponseObject;

  it('Create', async () => {
    uiSchema = await client.uiSchemaApi.createUISchema({
      uischemabody: {
        uiSchema: {
          buttonLabel: 'Submit',
          label: 'Sign in',
          type: 'Group',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/firstName',
              label: 'First Name',
              options: {
                format: 'text'
              }
            }, {
              type: 'Control',
              scope: '#/properties/lastName',
              label: 'Last Name',
              options: {
                format: 'text'
              }
            }, {
              type: 'Control',
              scope: '#/properties/email',
              label: 'Primary email',
              options: {
                format: 'text'
              }
            }
          ]
        }
      }
    });
    expect(uiSchema.uiSchema.label).to.equal('Sign in');
    expect(uiSchema.uiSchema.elements.length).to.equal(3);
    expect(uiSchema.uiSchema.elements[0].label).to.equal('First Name');
    expect(uiSchema.uiSchema.elements[0].scope).to.equal('#/properties/firstName');
  });

  it('List', async () => {
    const collection = await client.uiSchemaApi.listUISchemas({});
    const uiSchemas: UISchemasResponseObject[] = [];
    await collection.each(uiSchema => uiSchemas.push(uiSchema));
    expect(uiSchemas.length).to.be.greaterThanOrEqual(1);
    expect(uiSchemas.map(uiSchema => uiSchema.id)).to.include(uiSchema.id);
  });

  it('Update', async () => {
    uiSchema = await client.uiSchemaApi.replaceUISchemas({
      id: uiSchema.id,
      updateUISchemaBody: {
        uiSchema: uiSchema.uiSchema
      }
    });
    expect(uiSchema.uiSchema.label).to.equal('Sign in');
    expect(uiSchema.uiSchema.elements.length).to.equal(3);
  });

  it('Delete', async () => {
    await client.uiSchemaApi.deleteUISchemas({
      id: uiSchema.id
    });

    try {
      uiSchema = await client.uiSchemaApi.getUISchema({
        id: uiSchema.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
      uiSchema = undefined;
    }
    expect(uiSchema).to.be.undefined;
  });
});
