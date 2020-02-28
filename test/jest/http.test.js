const Http = require('../../src/http');
const MemoryStore = require('../../src/memory-store');
const defaultCacheMiddleware = require('../../src/default-cache-middleware');
const OktaApiError = require('../../src/api-error');
const HttpError = require('../../src/http-error');

describe('Http class', () => {
  describe('constructor', () => {
    it('creates empty defaultHeaders object', () => {
      const http = new Http({});
      expect(http.defaultHeaders).toEqual({});
    });
    it('accepts an "requestExecutor"', () => {
      const requestExecutor = { fake: true };
      const http = new Http({ requestExecutor });
      expect(http.requestExecutor).toBe(requestExecutor);
    });
    it('accepts a "cacheStore"', () => {
      const cacheStore = { fake: true };
      const http = new Http({ cacheStore });
      expect(http.cacheStore).toBe(cacheStore);
    });
    it('creates a "cacheStore" if none was passed', () => {
      const http = new Http({});
      expect(http.cacheStore).toBeInstanceOf(MemoryStore);
    });
    it('accepts a "cacheMiddleware"', () => {
      const cacheMiddleware = { fake: true };
      const http = new Http({ cacheMiddleware });
      expect(http.cacheMiddleware).toBe(cacheMiddleware);
    });
    it('uses default cache middleware if none was passed', () => {
      const http = new Http({});
      expect(http.cacheMiddleware).toBe(defaultCacheMiddleware);
    });
    it('accepts an "oauth" object', () => {
      const oauth = { fake: true };
      const http = new Http({ oauth });
      expect(http.oauth).toBe(oauth);
    });
  });
  describe('prepareRequest', () => {
    let request;
    beforeEach(() => {
      request = {
        headers: {}
      };
    });
    it('does not modify request headers if there is no "oauth" object', () => {
      const http = new Http({});
      return http.prepareRequest(request)
        .then(() => {
          expect(request.headers).toEqual({});
        });
    });
    describe('OAuth', () => {
      let oauth;
      let getAccessTokenResponse;
      let accessToken;
      beforeEach(() => {
        accessToken = {
          access_token: 'abcd1234'
        };
        getAccessTokenResponse = {
          status: 200,
          url: 'http://fakey.local',
          headers: { fakeHeaders: true },
          json: jest.fn().mockImplementation(() => Promise.resolve(accessToken))
        };
        oauth = {
          getAccessToken: jest.fn().mockImplementation(() => Promise.resolve(getAccessTokenResponse))
        };
      });
      it('Sets authorization header if accessToken has been set', () => {
        const http = new Http({ oauth });
        http.accessToken = accessToken;
        return http.prepareRequest(request)
          .then(() => {
            expect(request.headers).toEqual({
              Authorization: `Bearer ${accessToken.access_token}`
            });
          });
      });
      it('Requests and sets accessToken if it is not set', () => {
        const http = new Http({ oauth });
        return http.prepareRequest(request)
          .then(() => {
            expect(oauth.getAccessToken).toHaveBeenCalled();
            expect(http.accessToken).toBe(accessToken);
            expect(request.headers).toEqual({
              Authorization: `Bearer ${accessToken.access_token}`
            });
          });
      });
      it('Handles API errors', () => {
        const http = new Http({ oauth });
        getAccessTokenResponse.status = 401;
        const errorObj = {
          errorCode: 'a fake error'
        };
        getAccessTokenResponse.text = jest.fn().mockReturnValue(Promise.resolve(JSON.stringify(errorObj)));
        return http.prepareRequest(request)
          .catch(err => {
            expect(err).toBeInstanceOf(OktaApiError);
            expect(err).toEqual({
              name: 'OktaApiError',
              status: 401,
              errorCode: 'a fake error',
              errorSummary: '',
              errorCauses: undefined,
              errorLink: undefined,
              errorId: undefined,
              url: 'http://fakey.local',
              headers: { fakeHeaders: true },
              message: 'Okta HTTP 401 a fake error '
            });
          });
      });
      it('Handles unknown errors', () => {
        const http = new Http({ oauth });
        getAccessTokenResponse.status = 500;
        const errorText = 'an uknown error in plain text';
        getAccessTokenResponse.text = jest.fn().mockReturnValue(Promise.resolve(errorText));
        return http.prepareRequest(request)
          .catch(err => {
            expect(err).toBeInstanceOf(HttpError);
            expect(err).toEqual({
              name: 'HttpError',
              status: 500,
              url: 'http://fakey.local',
              headers: { fakeHeaders: true },
              message: 'HTTP 500 an uknown error in plain text'
            });
          });
      });
    });
  });
  describe('http method', () => {
    let requestExecutor;
    let response;
    let responseText;
    beforeEach(() => {
      response = {
        status: 200,
        url: 'http://fakey.local',
        headers: { fakeHeaders: true },
        clone: () => response,
        json: jest.fn().mockImplementation(() => Promise.resolve(JSON.parse(responseText))),
        text: () => Promise.resolve(responseText),
        _links: {
          self: {
            href: 'http://fakey.local'
          }
        }
      };
      responseText = JSON.stringify(response);
      requestExecutor = {
        fetch: jest.fn().mockImplementation(() => Promise.resolve(response))
      };
    });

    function testWithCacheMiddleware(cacheMiddleware) {
      it('returns fetch response', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        return http.http('http://fakey.local')
          .then(res => {
            expect(res).toBeDefined();
            expect(typeof res.text).toBe('function');
            expect(typeof res.json).toBe('function');
          });
      });

      it('uses default headers', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        http.defaultHeaders['fake'] = 'super fake';
        return http.http('http://fakey.local')
          .then(() => {
            expect(requestExecutor.fetch).toHaveBeenCalledWith({
              headers: {
                fake: 'super fake'
              },
              method: 'get',
              url: 'http://fakey.local'
            });
          });
      });
      it('can set extra headers', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        http.defaultHeaders['fake'] = 'super fake';
        const request = {
          headers: {
            extra: 'extra header'
          }
        };
        return http.http('http://fakey.local', request)
          .then(() => {
            expect(requestExecutor.fetch).toHaveBeenCalledWith({
              headers: {
                fake: 'super fake',
                extra: 'extra header'
              },
              method: 'get',
              url: 'http://fakey.local'
            });
          });
      });
      it('can set request method', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        const request = {
          method: 'put'
        };
        return http.http('http://fakey.local', request)
          .then(() => {
            expect(requestExecutor.fetch).toHaveBeenCalledWith({
              headers: {},
              method: 'put',
              url: 'http://fakey.local'
            });
          });
      });
      it('Handles API errors', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        response.status = 401;
        const errorObj = {
          errorCode: 'a fake error'
        };
        response.text = jest.fn().mockReturnValue(Promise.resolve(JSON.stringify(errorObj)));
        return http.http('http://fakey.local')
          .catch(err => {
            expect(err).toBeInstanceOf(OktaApiError);
            expect(err).toEqual({
              name: 'OktaApiError',
              status: 401,
              errorCode: 'a fake error',
              errorSummary: '',
              errorCauses: undefined,
              errorLink: undefined,
              errorId: undefined,
              url: 'http://fakey.local',
              headers: { fakeHeaders: true },
              message: 'Okta HTTP 401 a fake error '
            });
          });
      });
      it('Handles unknown errors', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        response.status = 500;
        const errorText = 'an uknown error in plain text';
        response.text = jest.fn().mockReturnValue(Promise.resolve(errorText));
        return http.http('http://fakey.local')
          .catch(err => {
            expect(err).toBeInstanceOf(HttpError);
            expect(err).toEqual({
              name: 'HttpError',
              status: 500,
              url: 'http://fakey.local',
              headers: { fakeHeaders: true },
              message: 'HTTP 500 an uknown error in plain text'
            });
          });
      });
      it('calls prepareRequest', () => {
        const http = new Http({ requestExecutor, cacheMiddleware });
        const request = {};
        jest.spyOn(http, 'prepareRequest').mockImplementation(request => {
          request.headers.extra = 'added by prepareRequest';
          return Promise.resolve();
        });
        return http.http('http://fakey.local', request)
          .then(() => {
            expect(http.prepareRequest).toHaveBeenCalledWith(request);
            expect(requestExecutor.fetch).toHaveBeenCalledWith({
              headers: {
                extra: 'added by prepareRequest'
              },
              method: 'get',
              url: 'http://fakey.local'
            });
          });
      });
      describe('delete method', () => {
        it('sets the method to "delete"', () => {
          const http = new Http({ requestExecutor, cacheMiddleware });
          return http.delete('http://fakey.local')
            .then(() => {
              expect(requestExecutor.fetch).toHaveBeenCalledWith({
                headers: {},
                method: 'delete',
                url: 'http://fakey.local'
              });
            });
        });
        it('allows custom headers', () => {
          const http = new Http({ requestExecutor, cacheMiddleware });
          const request = {
            headers: {
              extra: 'extra header'
            }
          };
          return http.delete('http://fakey.local', request)
            .then(() => {
              expect(requestExecutor.fetch).toHaveBeenCalledWith({
                headers: {
                  extra: 'extra header'
                },
                method: 'delete',
                url: 'http://fakey.local'
              });
            });
        });
      });
      describe('json', () => {
        it('Sets JSON headers, allows extra headers', () => {
          const http = new Http({ requestExecutor, cacheMiddleware });
          const request = {
            headers: {
              extra: 'extra header'
            }
          };
          return http.json('http://fakey.local', request)
            .then(() => {
              expect(requestExecutor.fetch).toHaveBeenCalledWith({
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  extra: 'extra header'
                },
                method: 'get',
                url: 'http://fakey.local'
              });
            });
        });
        it('returns JSON object', () => {
          const http = new Http({ requestExecutor, cacheMiddleware });
          return http.json('http://fakey.local')
            .then(res => {
              expect(res).toEqual(JSON.parse(responseText));
              expect(response.json).toHaveBeenCalled();
            });
        });
      });
    }

    describe('no cache middleware', () => {
      testWithCacheMiddleware(null);
    });

    describe('default cache middleware', () => {
      testWithCacheMiddleware();

      // TODO: fix cache middleware: https://oktainc.atlassian.net/browse/OKTA-280090
      xit('Returns a cached result on subsequent call', () => {
        const http = new Http({ requestExecutor });
        expect(http.cacheMiddleware).toBeDefined();
        return http.http('http://fakey.local')
          .then(() => {
            expect(requestExecutor.fetch).toHaveBeenCalledWith({
              headers: {},
              method: 'get',
              url: 'http://fakey.local'
            });
            requestExecutor.fetch.mockClear();
            return http.http('http://fakey.local');
          })
          .then(response => {
            expect(requestExecutor.fetch).not.toHaveBeenCalled();
            return response.text();
          })
          .then(text => {
            expect(text).toBe(responseText);
          });
      });
    });

    it('can pass "resources" and "isCollection" via a context object', () => {
      const http = new Http({ requestExecutor });
      jest.spyOn(http, 'cacheMiddleware');
      const context = {
        isCollection: true,
        resources: ['a', 'b']
      };
      return http.http('http://fakey.local', null, context)
        .then(() => {
          expect(http.cacheMiddleware).toHaveBeenCalledWith({
            resources: ['a', 'b'],
            isCollection: true,
            uri: 'http://fakey.local',
            cacheStore: jasmine.any(Object),
            req: {
              headers: {},
              method: 'get',
              url: 'http://fakey.local',
            },
            res: jasmine.any(Object)
          }, jasmine.any(Function));
        });
    });
  });
});
