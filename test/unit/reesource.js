const expect = require('chai').expect;

const Resource = require('../../src/resource');

describe('Resource class', () => {
  describe('.client property', () => {
    it('should not be enumerable', () => {
      const resource = new Resource({}, 'foo');
      expect(resource.client).to.equal('foo');
      expect(JSON.stringify(resource)).to.not.contain('client');
    });
  });
});
