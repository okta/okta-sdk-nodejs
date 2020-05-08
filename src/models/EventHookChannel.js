/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const EventHookChannelConfig = require('./EventHookChannelConfig');

/**
 * @class EventHookChannel
 * @extends Resource
 * @property { EventHookChannelConfig } config
 * @property { string } type
 * @property { string } version
 */
class EventHookChannel extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.config) {
      this.config = new EventHookChannelConfig(this.config);
    }
  }

}

module.exports = EventHookChannel;
