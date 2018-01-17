const expect = require('chai').expect;

const MemoryStore = require('../../src/memory-store');

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Memory store', () => {
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
    await store.set('key1', 'value1');
    expect(await store.get('key1')).to.equal('value1');
    await store.set('key2', 'value2');
    expect(await store.get('key2')).to.equal('value2');
    expect(await store.get('key1')).to.be.undefined;
  });

  it('removes expired values on attempted retrieval', async () => {
    const store = new MemoryStore();
    await store.set('key', 'value', { ttl: 10 });
    expect(await store.get('key')).to.equal('value');
    await wait(20);
    expect(await store.get('key')).to.be.undefined;
  });

  it('removes expired values even when not retrieved', async () => {
    const store = new MemoryStore({ expirationPoll: 5 });
    await store.set('key', 'value', { ttl: 10 });
    expect(await store.get('key')).to.equal('value');
    await wait(20);
    expect(store._keyArray.length).to.equal(0);
  });
});
