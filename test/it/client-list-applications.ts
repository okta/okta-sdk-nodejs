import { expect } from 'chai';
import faker = require('faker');

import * as okta from '@okta/okta-sdk-nodejs';
import models = require('../../src/models');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-applications`;
}

const client = new okta.Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.listApplications()', () => {
  const app1 = {
    name: 'bookmark',
    label: `node-sdk: Bookmark App ${faker.random.word()}`.substring(0, 49),
    signOnMode: 'BOOKMARK',
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  const app2 = {
    name: 'template_basic_auth',
    label: `node-sdk: Sample Basic Auth App ${faker.random.word()}`.substring(0, 49),
    signOnMode: 'BASIC_AUTH',
    settings: {
      app: {
        authURL: 'https://example.com/auth.html',
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  let basicApplication;
  let bookmarkApplication;

  before(async () => {
    await utils.removeAppByLabel(client, app1.label);
    await utils.removeAppByLabel(client, app2.label);
    basicApplication = await client.createApplication(app2);
    bookmarkApplication = await client.createApplication(app1);
  });

  after(async () => {
    await bookmarkApplication.deactivate();
    await bookmarkApplication.delete();
    await basicApplication.deactivate();
    await basicApplication.delete();
  });

  it('should return a collection', () => {
    expect(client.listApplications()).to.be.an.instanceof(collection);
  });

  it('should return the correct application types', async () => {
    let bookmarkApplication;
    let basicApplication;
    await client.listApplications().each(app => {
      if (app.label === app1.label && app instanceof models.BookmarkApplication) {
        bookmarkApplication = app;
      }
      if (app.label === app2.label && app instanceof models.BasicAuthApplication) {
        basicApplication = app;
      }
    });
    expect(bookmarkApplication).to.be.an.instanceof(models.BookmarkApplication);
    expect(basicApplication).to.be.an.instanceof(models.BasicAuthApplication);
  });

});
