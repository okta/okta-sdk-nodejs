const expect = require('chai').expect;

const Resource = require('../../src/resource');

describe('Resource class', () => {
  describe('.httpClient property', () => {
    it('should not be enumerable', () => {
      const resource = new Resource({}, 'foo');
      expect(resource.httpClient).to.equal('foo');
      expect(JSON.stringify(resource)).to.not.contain('httpClient');
    });
  });
});
