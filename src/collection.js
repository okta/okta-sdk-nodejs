/*!
 * Copyright (c) 2017-2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


const parseLinkHeader = require('parse-link-header');

/**
 * Provides an interface to iterate over all objects in a collection that has pagination via Link headers
 */
class Collection {

  /**
   * Creates an instance of Collection.
   * @param {ApiClient} client A reference to the top-level api client
   * @param {String} uri E.g. /api/v1/resources
   * @param {Object} Ctor Class of each item in the collection
   */
  constructor(client, uri, factory) {
    this.nextUri = uri;
    this.client = client;
    this.factory = factory;
    this.currentItems = [];
  }

  next() {
    const self = this;

    return new Promise((resolve, reject) => {
      function nextItem() {
        const item = self.currentItems.shift();
        const result = {
          value: item ? self.factory.createInstance(item, self.client) : null,
          done: !self.currentItems.length && !self.nextUri
        };
        resolve(result);
      }

      if (self.currentItems.length) {
        return nextItem();
      }

      self.getNextPage()
      .then(collection => {
        self.currentItems = collection;
        return nextItem();
      })
      .catch(reject);
    });
  }

  getNextPage() {
    return this.client.http.http(this.nextUri, null, {isCollection: true})
    .then(res => {
      const link = res.headers.get('link');
      if (link) {
        const parsed = parseLinkHeader(link);
        if (parsed.next) {
          this.nextUri = parsed.next.url;
          return res.json();
        }
      }
      this.nextUri = undefined;
      return res.json();
    });
  }

  /**
   * @param {Function} iterator Function to call with each resource instance
   *
   * @memberOf Collection
   */
  each(iterator) {
    const self = this;
    function nextItem() {
      return self.next()
      .then(nextResult => {
        if (!nextResult.value) {
          return;
        }
        const result = iterator(nextResult.value);

        // if it's a Promise
        if (result && result.then) {
          return result.then(shouldContinue => {
            if (shouldContinue !== false && !nextResult.done) {
              return nextItem();
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
        return nextItem();
      });
    }

    return nextItem();
  }

  /**
   * @description Returns a subscription for this collection.  Not all collections support this (only System Log at this time).
   * @param {Object} config Subscription configuration options
   * @param {Number} config.interval Time in ms to wait before checking for more items
   * @param {Function} config.next Function to call with each resource instance
   * @param {Function} config.error Synchronous function to call with each error.
   * @param {Function} config.complete Function to call when the stream is finished
   *
   * @memberOf Collection
   */
  subscribe(config) {
    const self = this;
    config = config || {};
    if (!config.next) {
      throw new Error('subscribe must have a next() callback defined');
    }
    if (typeof config.error !== 'function') {
      throw new Error('subscribe must have a error() callback defined');
    }
    const interval = config.interval || 5000;
    let closed = false;

    function nextItem() {
      if (closed) {
        return;
      }
      return self.next()
      .then(nextResult => {
        if (closed) {
          return;
        }

        if (!nextResult.value) {
          return setTimeout(nextItem, interval);
        }
        const result = config.next(nextResult.value);

        // if it's a Promise
        if (result && result.then) {
          return result.then(() => nextItem());
        } else {
          nextItem();
        }
      })
      .catch(err => {
        const errResult = config.error(err);
        if (errResult && errResult.then) {
          return errResult.then(() => nextItem());
        }
        return nextItem();
      });
    }

    nextItem();

    return {
      unsubscribe() {
        closed = true;
        config.complete();
      }
    };
  }
}

module.exports = Collection;
