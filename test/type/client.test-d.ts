import { expectError, expectType } from 'tsd';
import { Response } from 'node-fetch';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { Application, ApplicationOptions } from '../../src/types/models/Application';


const client = new Client();

// mandatory query parameters
expectError(client.listPolicies());

// non-string query parameters
expectError(client.deleteApplicationUser('appId', 'userId', {sendEmail: 0}));

// Client methods return either Promise or Collection
expectType<Promise<Response>>(client.deletePolicy('policyId'));
expectType<Collection<Application>>(client.listApplications());

// methods expecting body request parameters
const appOptions: ApplicationOptions = {
  name: 'oidc_app',
};
expectType<Promise<Application>>(client.createApplication(appOptions));
