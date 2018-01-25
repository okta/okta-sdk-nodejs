/*!
 * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * Provides an interface to continue paginating a collection, with a configurable between pages.
 * The delay does not take effect until the first empty page is reached.
 */
class Subscription {
  constructor(collection) {
    this.continue = true;
    this.collection = collection;
  }

  /**
   * @param {Number} paginationDelay Milliseconds to wait between pages, after seeing the first empty page
   * @param {Function} iterator The function to pass collection items to as they are fetched
   * @returns {Promise} Promise object that will be reject HTTP/Network errors and resolve if you call stop() on the subscription
   * @memberOf Subscription
   */
  poll(paginationDelay, iterator) {
    this.paginationDelay = paginationDelay;
    this.iterator = iterator;
    return this.nextItem();
  }

  /**
   * @private
   * @memberOf Subscription
   */
  nextItem() {
    return this.collection.next()
    .then(nextResult => {
      if (this.continue === false) {
        return;
      }

      if (!nextResult.value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.nextItem());
          }, this.paginationDelay);
        });
      }

      const result = this.iterator(nextResult.value);

      // if it's a Promise
      if (result && result.then) {
        return result.then(shouldContinue => {
          if (shouldContinue !== false && !nextResult.done) {
            return this.nextItem();
          }
        });

      // if they want to short-circuit
      } else if (result === false) {
        return;

      // if there are no more items
      } else if (nextResult.done) {
        return;
      }

      // if it's synchronous and not short-circuited
      return this.nextItem();
    });
  }
  /**
   * @description Stop the subscription, this will resolve the promise returned by poll()
   * @memberOf Subscription
   */
  stop() {
    this.continue = false;
  }
}

module.exports = Subscription;
