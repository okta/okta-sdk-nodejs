/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/// <reference types="node" />
import * as FormData from 'form-data';
import { URLSearchParams } from 'url';
import * as http from 'http';
import * as https from 'https';
import { Observable } from '../rxjsStub';
export * from './isomorphic-fetch';
/**
 * Represents an HTTP method.
 */
export declare enum HttpMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    CONNECT = 'CONNECT',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE',
    PATCH = 'PATCH'
}
/**
 * Represents an HTTP file which will be transferred from or to a server.
 */
export declare type HttpFile = {
    data: Buffer;
    name: string;
};
export declare class HttpException extends Error {
  constructor(msg: string);
}
/**
 * Represents the body of an outgoing HTTP request.
 */
export declare type RequestBody = undefined | string | FormData | URLSearchParams;
/**
 * Represents an HTTP request context
 */
export declare class RequestContext {
  private httpMethod;
  private headers;
  private body;
  private url;
  private affectedResources;
  private isCollection;
  private startTime;
  private agent;
  /**
      * Creates the request context using a http method and request resource url
      *
      * @param url url of the requested resource
      * @param httpMethod http method
      */
  constructor(url: string, httpMethod: HttpMethodEnum);
  getUrl(): string;
  /**
      * Replaces the url set in the constructor with this url.
      *
      */
  setUrl(url: string): void;
  /**
      * Sets the body of the http request either as a string or FormData
      *
      * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
      * request is discouraged.
      * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
      *
      * @param body the body of the request
      */
  setBody(body: RequestBody): void;
  getHttpMethod(): HttpMethodEnum;
  getHeaders(): {
        [key: string]: string;
    };
  getBody(): RequestBody;
  setQueryParam(name: string, value: string): void;
  /**
      * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
      *
      */
  addCookie(name: string, value: string): void;
  setHeaderParam(key: string, value?: string): void;
  setAffectedResources(affectedResources: string[]): void;
  setIsCollection(isCollection: boolean): void;
  setStartTime(startTime: Date): void;
  getStartTime(): Date | undefined;
  setAgent(agent: http.Agent | https.Agent): void;
  getAgent(): http.Agent | https.Agent | undefined;
}
export interface ResponseBody {
    text(): Promise<string>;
    binary(): Promise<Buffer>;
}
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
export declare class SelfDecodingBody implements ResponseBody {
  private dataSource;
  constructor(dataSource: Promise<Buffer>);
  binary(): Promise<Buffer>;
  text(): Promise<string>;
}
export declare class ResponseContext {
  httpStatusCode: number;
  headers: {
        [key: string]: string;
    };
  body: ResponseBody;
  constructor(httpStatusCode: number, headers: {
        [key: string]: string;
    }, body: ResponseBody);
    /**
     * Parse header value in the form `value; param1='value1'`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `''`
     */
  getParsedHeader(headerName: string): {
        [parameter: string]: string;
    };
  getBodyAsFile(): Promise<HttpFile>;
  /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
  getBodyAsAny(): Promise<string | Buffer | undefined>;
}
export interface HttpLibrary {
    send(request: RequestContext): Observable<ResponseContext>;
}
export interface PromiseHttpLibrary {
    send(request: RequestContext): Promise<ResponseContext>;
}
export declare function wrapHttpLibrary(promiseHttpLibrary: PromiseHttpLibrary): HttpLibrary;
