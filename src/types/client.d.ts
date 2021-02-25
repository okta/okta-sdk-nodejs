import GeneratedApiClient from "./generated-client";
import Oauth from "./oauth";


import Http from "./http";


/**
 * Base client that encapsulates the HTTP request mechanism, and knowledge of how to authenticate with the Okta API
 *
 * @class Client
 * @extends {GeneratedApiClient}
 */
declare class Client extends GeneratedApiClient {
    constructor(config: any);
    requestExecutor: any;
    authorizationMode: string;
    baseUrl: string;
    apiToken: string;
    clientId: string;
    scopes: string[];
    privateKey: string;
    oauth: Oauth;
    http: Http;
}

export default Client;
