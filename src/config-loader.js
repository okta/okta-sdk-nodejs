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
    const localYamlPath = path.join(process.cwd(), 'okta.yml');
    const globalYamlPath = path.join(os.homedir(), '.okta', 'okta.yml');
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
    this.apply(yaml.safeLoad(fs.readFileSync(path)));
  }

  apply(config) {
    _.merge(this.config, config);
  }
}

module.exports = ConfigLoader;
