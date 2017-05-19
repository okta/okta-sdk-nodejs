/**
 * @class Resource
 *
 * Base resource which all others inherit from
 */
class Resource {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
    Object.defineProperty(this, 'client', {
      enumerable: false,
      value: client
    });
  }
}

module.exports = Resource;