const { apiConsolidation } = require('./apiConsolidation.cjs');
const { methodRenames } = require('./methodRenames.cjs');
const { pathParamsRenames } = require('./pathParamsRenames.cjs');
const { bodyNameRenames } = require('./bodyNameRenames.cjs');

module.exports = {
  apiConsolidation,
  methodRenames,
  pathParamsRenames,
  bodyNameRenames,
};
