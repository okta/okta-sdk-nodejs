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


const _ = require('lodash');
const fs = require('fs');
const flat = require('flat');
const os = require('os');
const path = require('path');
const yaml = require('js-yaml');

class ConfigLoader {

  constructor() {
    this.prefix = 'OKTA';
    this.config = {
      client: {
        orgUrl: '',
        token: ''
      }
    };
  }

  applyDefaults() {
    const localYamlPath = path.join(process.cwd(), 'okta.yaml');
    const globalYamlPath = path.join(os.homedir(), '.okta', 'okta.yaml');
    if (fs.existsSync(globalYamlPath)) {
      this.applyYamlFile(globalYamlPath);
    }
    if (fs.existsSync(localYamlPath)) {
      this.applyYamlFile(localYamlPath);
    }
    this.applyEnvVars();
  }

  applyEnvVars() {
    const delimiter = '_';
    const prefix = this.prefix;
    const flatConfig = { delimiter: delimiter };
    const flattendDefaultConfig = flat.flatten(this.config, flatConfig);

    var flatEnvValues = Object.keys(flattendDefaultConfig)
      .reduce((envVarMap, key) => {
        var envKey = prefix + delimiter + key.toUpperCase();

        var value = process.env[envKey];

        if (value !== undefined) {
          envVarMap[key] = typeof flattendDefaultConfig[key] === 'number' ?
            parseInt(value, 10) : value;
        }

        return envVarMap;
      }, {});

    const envConfig = flat.unflatten(flatEnvValues, flatConfig);

    this.apply(envConfig);
  }

  applyYamlFile(path) {
    this.apply(yaml.safeLoad(fs.readFileSync(path)).okta);
  }

  apply(config) {
    _.merge(this.config, config);
  }
}

module.exports = ConfigLoader;
