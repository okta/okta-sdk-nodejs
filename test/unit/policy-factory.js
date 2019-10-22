const expect = require('chai').expect;

const PolicyFactory = require('../../src/factories/PolicyFactory');


describe('Policy Factory', () => {
  const pf = new PolicyFactory;

  it('has the correct mapping', async () => {
    expect(pf.getMapping()).to.have.property('OKTA_SIGN_ON');
    expect(pf.getMapping()).to.have.property('PASSWORD');
  });

  it('has correct resolution property', async () => {
    expect(pf.getResolutionProperty()).to.be.equal('type');
  });

});