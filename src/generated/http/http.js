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


"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethodEnum = void 0;
// typings of url-parse are incorrect...
// @ts-ignore
const URLParse = require("url-parse");
const rxjsStub_1 = require("../rxjsStub");
__exportStar(require("./isomorphic-fetch"), exports);
/**
 * Represents an HTTP method.
 */
var HttpMethodEnum;
(function (HttpMethodEnum) {
    HttpMethodEnum["GET"] = "GET";
    HttpMethodEnum["HEAD"] = "HEAD";
    HttpMethodEnum["POST"] = "POST";
    HttpMethodEnum["PUT"] = "PUT";
    HttpMethodEnum["DELETE"] = "DELETE";
    HttpMethodEnum["CONNECT"] = "CONNECT";
    HttpMethodEnum["OPTIONS"] = "OPTIONS";
    HttpMethodEnum["TRACE"] = "TRACE";
    HttpMethodEnum["PATCH"] = "PATCH";
})(HttpMethodEnum = exports.HttpMethodEnum || (exports.HttpMethodEnum = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
/**
 * Represents an HTTP request context
 */
class RequestContext {
    /**
      * Creates the request context using a http method and request resource url
      *
      * @param url url of the requested resource
      * @param httpMethod http method
      */
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.affectedResources = [];
        this.isCollection = false;
        this.startTime = undefined;
        this.agent = undefined;
        this.url = new URLParse(url, true);
    }
    /*
      * Returns the url set in the constructor including the query string
      *
      */
    getUrl() {
        return this.url.toString();
    }
    /**
      * Replaces the url set in the constructor with this url.
      *
      */
    setUrl(url) {
        this.url = new URLParse(url, true);
    }
    /**
      * Sets the body of the http request either as a string or FormData
      *
      * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
      * request is discouraged.
      * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
      *
      * @param body the body of the request
      */
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        let queryObj = this.url.query;
        queryObj[name] = value;
        this.url.set('query', queryObj);
    }
    /**
      * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
      *
      */
    addCookie(name, value) {
        if (!this.headers['Cookie']) {
            this.headers['Cookie'] = '';
        }
        this.headers['Cookie'] += name + '=' + value + '; ';
    }
    setHeaderParam(key, value) {
        if (value) {
            this.headers[key] = value;
        }
        else {
            delete this.headers[key];
        }
    }
    setAffectedResources(affectedResources) {
        this.affectedResources = affectedResources;
    }
    setIsCollection(isCollection) {
        this.isCollection = isCollection;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    getStartTime() {
        return this.startTime;
    }
    setAgent(agent) {
        this.agent = agent;
    }
    getAgent() {
        return this.agent;
    }
}
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        return data.toString();
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1='value1'`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `''`
     */
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(';');
        for (const parameter of parameters) {
            let [key, value] = parameter.split('=', 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[''] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith("'") && value.endsWith("'")) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader('content-disposition')['filename'] || '';
        return { data, name: fileName };
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
    getBodyAsAny() {
        try {
            return this.body.text();
        }
        catch { }
        try {
            return this.body.binary();
        }
        catch { }
        return Promise.resolve(undefined);
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return (0, rxjsStub_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
