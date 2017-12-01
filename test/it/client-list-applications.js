const expect = require('chai').expect;

const collection = require('../../src/collection');
const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-applications`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.listApplications()', () => {
  const app1 = {
    name: 'bookmark',
    label: 'my bookmark app',
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
    label: 'Sample Basic Auth App',
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
