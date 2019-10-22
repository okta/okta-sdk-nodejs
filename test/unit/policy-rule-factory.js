const expect = require('chai').expect;

const PolicyRuleFactory = require('../../src/factories/PolicyRuleFactory');


describe('Policy Factory', () => {
  const prf = new PolicyRuleFactory;

  it('has the correct mapping', async () => {
    expect(prf.getMapping()).to.have.property('SIGN_ON');
    expect(prf.getMapping()).to.have.property('PASSWORD');
  });

  it('has correct resolution property', async () => {
    expect(prf.getResolutionProperty()).to.be.equal('type');
  });

});