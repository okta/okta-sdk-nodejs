#!/bin/bash -xe

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

export OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com
get_vault_secret_key devex/okta-sdk-nodejs-vars api_key OKTA_CLIENT_TOKEN
export OKTA_CLIENT_CLIENTID=0oa1q34stxthm0zbJ1d7
get_vault_secret_key devex/okta-sdk-nodejs-vars private_key OKTA_CLIENT_PRIVATEKEY
get_vault_secret_key devex/okta-sdk-nodejs-vars username ORG_USER

if ! yarn aftertest; then
  echo "Cleanup failed! Exiting..."
  exit ${TEST_FAILURE}
fi

exit ${SUCCESS}