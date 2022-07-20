import { expectError, expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { Application } from '../../src/types/generated/models/Application';
import { BookmarkApplication } from '../../src/types/generated/models/BookmarkApplication';


const client = new Client();
(async function () {
  // mandatory query parameters
  expectError(client.listPolicies());

  // non-string query parameters
  expectError(client.deleteApplicationUser('appId', 'userId', {sendEmail: 0}));

  // Client methods return either Promise or Collection
  expectType<Promise<void>>(client.deletePolicy('policyId'));
  expectType<Collection<Application>>(await client.listApplications());

  // methods expecting body request parameters
  const appOptions: BookmarkApplication = {
    name: 'bookmark',
    label: 'Bookmark app',
    signOnMode: 'BOOKMARK',
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };

  expectType<Promise<Application>>(client.createApplication(appOptions));
}());

