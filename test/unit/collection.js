const expect = require('chai').expect;

const Collection = require('../../src/collection');

describe('Collection', () => {
  describe('.each()', () => {
    it('should resolve immediately when there are no items in the collection', async () => {
      const mockClient = {
        http: {
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
        http: {
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
  });
});
