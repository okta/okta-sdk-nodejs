/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const InlineHookChannel = require('./InlineHookChannel');

/**
 * @class InlineHook
 * @extends Resource
 * @property { hash } _links
 * @property { InlineHookChannel } channel
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { string } status
 * @property { string } type
 * @property { string } version
 */
class InlineHook extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.channel) {
      this.channel = new InlineHookChannel(this.channel);
    }
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  update() {
    return this.client.updateInlineHook(this.id, this);
  }
  delete() {
    return this.client.deleteInlineHook(this.id);
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  activate() {
    return this.client.activateInlineHook(this.id);
  }

  /**
   * @returns {Promise<InlineHook>}
   */
  deactivate() {
    return this.client.deactivateInlineHook(this.id);
  }

  /**
   * @param {InlineHookPayload} inlineHookPayload
   * @returns {Promise<InlineHookResponse>}
   */
  execute(inlineHookPayload) {
    return this.client.executeInlineHook(this.id, inlineHookPayload);
  }
}

module.exports = InlineHook;
