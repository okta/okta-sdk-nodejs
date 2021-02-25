/**
 * It's like fetch :) plus some extra convenience methods.
 *
 * @class Http
 */
declare class Http {
    static errorFilter(response: any): any;
    constructor(httpConfig: any);
    defaultHeaders: {};
    requestExecutor: any;
    cacheStore: any;
    cacheMiddleware: any;
    oauth: any;
    prepareRequest(request: any): any;
    http(uri: any, request: any, context: any): any;
    delete(uri: any, request: any, context: any): any;
    json(uri: any, request: any, context: any): any;
    getJson(uri: any, request: any, context: any): any;
    post(uri: any, request: any, context: any): any;
    postJson(uri: any, request: any, context: any): any;
    putJson(uri: any, request: any, context: any): any;
    put(uri: any, request: any, context: any): any;
}

export default Http;

