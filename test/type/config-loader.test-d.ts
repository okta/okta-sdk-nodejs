import { expectType } from 'tsd';
import { ConfigLoader } from '../../src/types/config-loader';


const configLoader = new ConfigLoader();
expectType<void>(configLoader.apply({}));
expectType<void>(configLoader.applyDefaults());
expectType<void>(configLoader.applyEnvVars());
expectType<void>(configLoader.applyYamlFile('/path/to/file'));
