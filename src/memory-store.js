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


class MemoryStore {
  constructor(options) {
    options = options || {};
    this._keyLimit = options.keyLimit || 100000;
    this._keyArray = [];
    this._store = {};

    // Purge based on expiration every x milliseconds
    setInterval(() => {
      let kl = this._keyArray.length;
      const now = Date.now();
      while (kl--) {
        const key = this._keyArray[kl];
        if (!this._store[key]) {
          this._keyArray.splice(kl, 1);
          continue;
        }
        if (this._store[key].expiration < now) {
          delete this._store[key];
          this._keyArray.splice(kl, 1);
        }
      }
    }, options.expirationPoll || 15000);
  }

  get(key) {
    return new Promise(resolve => {
      let string;
      const stored = this._store[key];
      if (stored) {
        // Remove from cache if expired
        if (stored.expiration < Date.now()) {
          this._keyArray.splice(stored.keyIndex, 1);
          delete this._store[key];
        } else {
          string = stored.string;
        }
      }
      resolve(string);
    });
  }

  set(key, string, options) {
    options = options || {};
    return new Promise(resolve => {
      if (!key) {
        throw new Error('MemoryStore.set requires a defined key');
      }

      this._store[key] = {
        string: string,
        expiration: (options.ttl && options.ttl + Date.now()) || Infinity,
        keyIndex: this._keyArray.length
      };
      this._keyArray.push(key);

      // Purge over key limit
      while (this._keyArray.length > this._keyLimit) {
        delete this._store[this._keyArray.shift()];
      }

      resolve(string);
    });
  }

  delete(key) {
    return new Promise(resolve => {
      const stored = this._store[key];
      if (stored) {
        this._keyArray.splice(stored.keyIndex, 1);
        delete this._store[key];
      }
      resolve();
    });
  }
}

module.exports = MemoryStore;
