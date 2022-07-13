const _ = require('lodash');
const SwaggerParser = require("@apidevtools/swagger-parser");
const spec2 = require('../node_modules/@okta/openapi/dist/spec.json');

(async () => {
    const spec3 = await SwaggerParser.dereference(process.argv[2] || "spec/management.yaml");
    const ops = {};
    
    for (const path in spec2.paths) {
        for (const method in spec2.paths[path]) {
            const op = spec2.paths[path][method];
            ops[op.operationId] = {};
            ops[op.operationId]['v2'] = op;
        }
    }

    for (const path in spec3.paths) {
        for (const method in spec3.paths[path]) {
            const op = spec3.paths[path][method];
            if (!ops[op.operationId]) {
                ops[op.operationId] = {};
            }
            ops[op.operationId]['v3'] = op;
        }
    }

    for (const opId in ops) {
        const op = ops[opId];
        if (op.v2 && !op.v3) {
            console.warn(`${opId} - missing in v3`);
        } else if (op.v2 && op.v3) {
            const queryParams2 = op.v2.parameters.filter(p => p.in === 'query').map(p => p.name);
            const queryParams3 = (op.v3.parameters || []).filter(p => p.in === 'query').map(p => p.name);
            if (!_.isEqual(queryParams2, queryParams3)) {
                console.error(`${opId} - incompatible query params: v2 has ${queryParams2}, v3 has ${queryParams3}`);
            }
        }
    }
})();
