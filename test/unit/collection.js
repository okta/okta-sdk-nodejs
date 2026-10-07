const expect = require('chai').expect;

const { Collection } = require('../../src/collection');

describe('Collection', () => {
  describe('.each()', () => {
    it('should resolve immediately when there are no items in the collection', async () => {
      const mockClient = {
        http: () => {
          return Promise.resolve({
            headers: {
              get: () => {}
            },
            json: () => {
              return Promise.resolve([]);
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      let called = false;
      await collection.each(() => {
        called = true;
      }).then(() => {
        expect(called).to.be.false;
      });
    });

    it('should follow pagination', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.resolve([1]);
              }
              if (uri === '/next') {
                return Promise.resolve([2]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const collected = [];
      await collection.each((item) => {
        collected.push(item);
      }).then(() => {
        expect(collected[0]).to.equal(1);
        expect(collected[1]).to.equal(2);
      });
    });

    it('should pass request object to http client if it has been initialized with constructor', async () => {
      const noop = () => {};
      const mockRequest = { method: 'post' };
      const mockClient = {
        http: (_, request) => {
          expect(request).to.deep.equal(mockRequest);
          return Promise.resolve({
            headers: { get: noop },
            json: () => Promise.resolve([1, 2, 3])
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory, mockRequest);
      await collection.each(noop);
    });

    it('should preserve original query params (e.g. expand) across paginated requests when the next Link header omits them', async () => {
      // Regression test for #439: Okta's Link header does not echo `expand`
      // in the next URL, so without preservation the second page drops it.
      const requestedUris = [];
      const mockClient = {
        http: (uri) => {
          requestedUris.push(uri);
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri.startsWith('/api/v1/apps/app1/users?') && uri.includes('expand=user') && !uri.includes('after=')) {
                  // First-page Link header — note: no expand param in next URL
                  return '</api/v1/apps/app1/users?limit=5&after=cursor1>; rel="next"';
                }
              },
            },
            json: () => {
              if (!uri.includes('after=')) {
                return Promise.resolve([{ id: 'u1' }]);
              }
              if (uri.includes('after=cursor1')) {
                return Promise.resolve([{ id: 'u2' }]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(
        mockClient,
        '/api/v1/apps/app1/users?limit=5&expand=user',
        mockFactory
      );
      const collected = [];
      await collection.each((item) => {
        collected.push(item);
      });
      expect(collected).to.deep.equal([{ id: 'u1' }, { id: 'u2' }]);
      expect(requestedUris).to.have.lengthOf(2);
      expect(requestedUris[0]).to.equal('/api/v1/apps/app1/users?limit=5&expand=user');
      expect(requestedUris[1]).to.include('after=cursor1');
      expect(requestedUris[1]).to.include('expand=user');
    });

    it('should let the next Link header override overlapping query params (e.g. after/cursor)', async () => {
      const requestedUris = [];
      const mockClient = {
        http: (uri) => {
          requestedUris.push(uri);
          return Promise.resolve({
            headers: {
              get: () => {
                if (!uri.includes('after=cursor2')) {
                  return '</api/v1/users?limit=5&after=cursor2>; rel="next"';
                }
              },
            },
            json: () => {
              return Promise.resolve([{}]);
            }
          });
        }
      };
      const mockFactory = { createInstance: (item) => item };
      const collection = new Collection(
        mockClient,
        '/api/v1/users?limit=5&after=cursor1&expand=user',
        mockFactory
      );
      await collection.each(() => {});
      expect(requestedUris[1]).to.include('after=cursor2');
      expect(requestedUris[1]).to.not.include('after=cursor1');
      expect(requestedUris[1]).to.include('expand=user');
    });
  });

  describe('.subscribe()', () => {
    it('should throw if next is not provided', () => {
      const collection = new Collection({}, '', {});
      expect(() => {
        collection.subscribe();
      }).to.throw('');
    });
    it('should throw if error is not provided', () => {
      const collection = new Collection({}, '', {});
      expect(() => {
        collection.subscribe({ next: () => {} });
      }).to.throw('');
    });
    it('should handle null, then continue', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.resolve([]);
              }
              if (uri === '/next') {
                return Promise.resolve([1]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const collected = [];
      let thrownError;
      await new Promise(resolve => {
        const subscription = collection.subscribe({
          interval: 1,
          next(item) {
            collected.push(item);
            subscription.unsubscribe();
          },
          complete() {
            resolve();
          },
          error(err) {
            thrownError = err;
          }
        });
      });
      expect(thrownError).to.be.undefined;
      expect(collected[0]).to.equal(1);
    });
    it('should catch errors if thrown, then continue', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.reject(new Error('some failure'));
              }
              if (uri === '/next') {
                return Promise.resolve([1]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const collected = [];
      let thrownError;
      await new Promise(resolve => {
        const subscription = collection.subscribe({
          next(item) {
            collected.push(item);
            subscription.unsubscribe();
          },
          complete() {
            resolve();
          },
          error(err) {
            thrownError = err;
          }
        });
      });
      expect(thrownError).to.be.instanceof(Error);
      expect(thrownError.message).to.equal('some failure');
      expect(collected[0]).to.equal(1);
    });
    it('does not call next if cancelled during fetch', async () => {
      const mockClient = {
        http: () => new Promise(resolve => setTimeout(() => resolve({
          headers: {
            get: () => {
              return '</next>; rel="next"';
            },
          },
          json: () => {
            return Promise.resolve([1]);
          }
        }), 100))
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const collected = [];
      let thrownError;
      await new Promise(resolve => {
        const subscription = collection.subscribe({
          next(item) {
            collected.push(item);
          },
          complete() {
            setTimeout(resolve, 200);
          },
          error(err) {
            thrownError = err;
          }
        });
        subscription.unsubscribe();
      });
      expect(thrownError).to.be.undefined;
      expect(collected.length).to.equal(0);
    });
    it('should wait for error handler to return, then continue', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.reject(new Error('some failure'));
              }
              if (uri === '/next') {
                return Promise.resolve([1]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const orderOfEvents = [];
      let thrownError;
      await new Promise(resolve => {
        const subscription = collection.subscribe({
          next() {
            orderOfEvents.push('pushed');
            subscription.unsubscribe();
          },
          complete() {
            resolve();
          },
          error(err) {
            thrownError = err;
            return new Promise(resolve => {
              setTimeout(() => {
                orderOfEvents.push('errored');
                resolve();
              }, 100);
            });
          }
        });
      });
      expect(thrownError).to.be.instanceof(Error);
      expect(thrownError.message).to.equal('some failure');
      expect(orderOfEvents).to.deep.equal(['errored', 'pushed']);
    });
  });

  describe('.next()', () => {
    it('should return { done: true } only _after_ all items in the collection have been returned', async () => {
      const mockClient = {
        http: () => {
          return Promise.resolve({
            headers: {
              get: () => {}
            },
            json: () => {
              return Promise.resolve([1, 2, 3]);
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      expect(await collection.next()).to.deep.equal({ value: 1, done: false });
      expect(await collection.next()).to.deep.equal({ value: 2, done: false });
      expect(await collection.next()).to.deep.equal({ value: 3, done: false });
      expect(await collection.next()).to.deep.equal({ done: true, value: null });
    });

    it('should return { done: true } only _after_ all items in the collection have been returned when paginating', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.resolve([1]);
              }
              if (uri === '/next') {
                return Promise.resolve([2, 3]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      expect(await collection.next()).to.deep.equal({ value: 1, done: false });
      expect(await collection.next()).to.deep.equal({ value: 2, done: false });
      expect(await collection.next()).to.deep.equal({ value: 3, done: false });
      expect(await collection.next()).to.deep.equal({ done: true, value: null });
    });
  });

  describe('for...of', () => {
    it('should resolve immediately when there are no items in the collection', async () => {
      const mockClient = {
        http: () => {
          return Promise.resolve({
            headers: {
              get: () => {}
            },
            json: () => {
              return Promise.resolve([]);
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      let called = false;
      for await (let _ of collection) {
        called = true;
      }
      expect(called).to.be.false;
    });

    it('should follow pagination', async () => {
      const mockClient = {
        http: (uri) => {
          return Promise.resolve({
            headers: {
              get: () => {
                if (uri === '/') {
                  return '</next>; rel="next"';
                }
              },
            },
            json: () => {
              if (uri === '/') {
                return Promise.resolve([1]);
              }
              if (uri === '/next') {
                return Promise.resolve([2]);
              }
            }
          });
        }
      };
      const mockFactory = {
        createInstance: (item) => item
      };
      const collection = new Collection(mockClient, '/', mockFactory);
      const collected = [];
      for await (let item of collection) {
        collected.push(item);
      }
      expect(collected[0]).to.equal(1);
      expect(collected[1]).to.equal(2);
    });
  });
});
