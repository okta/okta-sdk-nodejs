import { GeneratedApiClient } from './generated-client';
import { Application } from './models/Application';
import { BasicAuthApplicationOptions } from './request-options/BasicAuthApplicationOptions';
import { BookmarkApplicationOptions } from './request-options/BookmarkApplicationOptions';
import { OpenIdConnectApplicationOptions } from './request-options/OpenIdConnectApplicationOptions';
import { SamlCustomApplicationOptions } from './request-options/SamlCustomApplicationOptions';
import { Swa3FieldApplicationOptions } from './request-options/Swa3FieldApplicationOptions';
import { SwaApplicationOptions } from './request-options/SwaApplicationOptions';
import { SwaCustomApplicationOptions } from './request-options/SwaCustomApplicationOptions';
import { SwaNoPluginApplicationOptions } from './request-options/SwaNoPluginApplicationOptions';
import { WsFederationApplicationOptions } from './request-options/WsFederationApplicationOptions';

type ApplicationOptions =
  BasicAuthApplicationOptions | BookmarkApplicationOptions | OpenIdConnectApplicationOptions |
  SamlCustomApplicationOptions | Swa3FieldApplicationOptions | SwaApplicationOptions |
  SwaCustomApplicationOptions | SwaNoPluginApplicationOptions | WsFederationApplicationOptions;

declare class ParameterizedOperationsClient extends GeneratedApiClient {
  createApplication<T extends Application = Application>(applicationOptions: ApplicationOptions, queryParameters?: {
    activate?: boolean,
  }): Promise<T>;
  getApplication<T extends Application>(appId: string): Promise<T>;
}

export {
  ParameterizedOperationsClient
};
