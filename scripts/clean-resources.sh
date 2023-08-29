#!/bin/bash -xe

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

export OKTA_CLIENT_ORGURL=https://node-sdk-oie.oktapreview.com
export OKTA_CLIENT_CLIENTID=0oa1q34stxthm0zbJ1d7
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default api_key OKTA_CLIENT_TOKEN
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default private_key OKTA_CLIENT_PRIVATEKEY
get_vault_secret_key repo_gh-okta-okta-sdk-nodejs/default username ORG_USER

if ! yarn aftertest; then
  echo "Cleanup failed! Exiting..."
  exit ${TEST_FAILURE}
fi

exit ${SUCCESS}