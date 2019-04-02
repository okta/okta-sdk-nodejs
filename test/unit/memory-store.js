const expect = require('chai').expect;
const sinon = require('sinon');

const MemoryStore = require('../../src/memory-store');


describe('Memory store', () => {
  var clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('can get, set, and delete a value', async () => {
    const store = new MemoryStore();
    await store.set('key', 'value');
    expect(await store.get('key')).to.equal('value');
    await store.delete('key');
    expect(await store.get('key')).to.be.undefined;
  });

  it('throws an error if trying to set without a key', async () => {
    const store = new MemoryStore();
    let err;
    try {
      await store.set(null, 'value');
    } catch (e) {
      err = e;
    } finally {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('MemoryStore.set requires a defined key');
    }
  });

  it('bounds the growth', async () => {
    const store = new MemoryStore({ keyLimit: 1 });
    const spy = sinon.spy(store._store, 'delete');
    await store.set('key1', 'value1');
    expect(await store.get('key1')).to.equal('value1');
    await store.set('key2', 'value2');
    expect(await store.get('key2')).to.equal('value2');
    expect(await store.get('key1')).to.be.undefined;
    expect(spy.calledOnceWith('key1')).to.be.true;
  });

  it('sets item to have infinite expiration, by default', async () => {
    const store = new MemoryStore();
    await store.set('key', 'value');
    const item = store._store.get('key');
    expect(item.expiration).to.equal(Infinity);
  });

  it('removes expired values on attempted retrieval', async () => {
    const store = new MemoryStore();
    await store.set('key', 'value', { ttl: 10 });
    const spy = sinon.spy(store._store, 'delete');
    expect(await store.get('key')).to.equal('value');
    const item = store._store.get('key');
    expect(item.expiration).to.be.greaterThan(Date.now());
    clock.tick(20);
    expect(item.expiration).to.be.lessThan(Date.now());
    expect(await store.get('key')).to.be.undefined;
    expect(spy.calledOnceWith('key')).to.be.true;
  });

  it('does not expire values in the background, by default', async () => {
    const store = new MemoryStore();
    expect(store._interval).to.be.undefined;
    await store.set('key', 'value', { ttl: 10 });
    expect(await store.get('key')).to.equal('value');
    const item = store._store.get('key');
    expect(item.expiration).to.be.greaterThan(Date.now());
    clock.tick(20);
    expect(item.expiration).to.be.lessThan(Date.now());
    expect(store._store.size).to.equal(1);
  });

  it('if expirationPoll option is provided, removes expired values even when not retrieved', async () => {
    const store = new MemoryStore({ expirationPoll: 5 });
    expect(store._interval).to.be.ok;
    const spy = sinon.spy(store._store, 'delete');
    await store.set('key', 'value', { ttl: 10 });
    expect(await store.get('key')).to.equal('value');
    const item = store._store.get('key');
    expect(item.expiration).to.be.greaterThan(Date.now());
    clock.tick(20);
    expect(item.expiration).to.be.lessThan(Date.now());
    expect(store._store.size).to.equal(0);
    expect(spy.calledOnceWith('key')).to.be.true;
  });
});
