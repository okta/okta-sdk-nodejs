import { GeneratedApiClient } from './generated-client';
import { Application } from './models/Application';
import { BasicAuthApplicationOptions } from './request-options/BasicAuthApplicationOptions';
import { BookmarkApplicationOptions } from './request-options/BookmarkApplicationOptions';
import { OpenIdConnectApplicationOptions } from './request-options/OpenIdConnectApplicationOptions';
import { SamlCustomApplicationOptions } from './request-options/SamlCustomApplicationOptions';
import { SwaThreeFieldApplicationOptions } from './request-options/SwaThreeFieldApplicationOptions';
import { SwaApplicationOptions } from './request-options/SwaApplicationOptions';
import { AutoLoginApplicationOptions } from './request-options/AutoLoginApplicationOptions';
import { SecurePasswordStoreApplicationOptions } from './request-options/SecurePasswordStoreApplicationOptions';
import { WsFederationApplicationOptions } from './request-options/WsFederationApplicationOptions';

type ApplicationOptions =
  BasicAuthApplicationOptions | BookmarkApplicationOptions | OpenIdConnectApplicationOptions |
  SamlCustomApplicationOptions | SwaThreeFieldApplicationOptions | SwaApplicationOptions |
  AutoLoginApplicationOptions | SecurePasswordStoreApplicationOptions | WsFederationApplicationOptions;

declare class ParameterizedOperationsClient extends GeneratedApiClient {
  createApplication<T extends Application = Application>(applicationOptions: ApplicationOptions, queryParameters?: {
    activate?: boolean,
  }): Promise<T>;
  getApplication<T extends Application>(appId: string): Promise<T>;
}

export {
  ApplicationOptions,
  ParameterizedOperationsClient
};
