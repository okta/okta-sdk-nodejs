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
    this._store = new Map();

    // Purge based on expiration every x milliseconds
    if (options.expirationPoll !== null) {
      setInterval(() => {
        const now = Date.now();
        for (let entry of this._store.entries()) {
          const key = entry[0];
          const val = entry[1];
          if (val.expiration < now) {
            this._store.delete(key);
          }
        }
      }, options.expirationPoll || 15000);
    }
  }

  get(key) {
    return new Promise(resolve => {
      let string;
      const stored = this._store.get(key);
      if (stored) {
        // Remove from cache if expired
        if (stored.expiration < Date.now()) {
          this._store.delete(key);
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

      this._store.set(key, {
        string: string,
        expiration: (options.ttl && options.ttl + Date.now()) || Infinity
      });

      // Purge over key limit
      const purgeCount = this._store.size - this._keyLimit;
      if (purgeCount > 0) {
        const keys = this._store.keys();
        for (let k = 0; k < purgeCount; k++) {
          this._store.delete(keys.next().value);
        }
      }

      resolve(string);
    });
  }

  delete(key) {
    return new Promise(resolve => {
      const stored = this._store.get(key);
      if (stored) {
        this._store.delete(key);
      }
      resolve();
    });
  }
}

module.exports = MemoryStore;
