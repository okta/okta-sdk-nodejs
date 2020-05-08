/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const InlineHookChannelConfig = require('./InlineHookChannelConfig');

/**
 * @class InlineHookChannel
 * @extends Resource
 * @property { InlineHookChannelConfig } config
 * @property { string } type
 * @property { string } version
 */
class InlineHookChannel extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.config) {
      this.config = new InlineHookChannelConfig(this.config);
    }
  }

}

module.exports = InlineHookChannel;
