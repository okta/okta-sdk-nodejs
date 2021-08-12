#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

aws s3 --quiet --region us-east-1 cp s3://ci-secret-stash/prod/okta-sdk-nodejs/privateKey.pem ${OKTA_HOME}/${REPO}/scripts/privateKey.pem

export OKTA_CLIENT_ORGURL=https://node-sdk.okta.com
get_vault_secret_key devex/okta-sdk-nodejs_apiKey apiKey OKTA_CLIENT_TOKEN
export OKTA_CLIENT_CLIENTID=0oa1jnkiuz6FCTchz4x7
export OKTA_CLIENT_PRIVATEKEY=$(cat ${OKTA_HOME}/${REPO}/scripts/privateKey.pem)

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/test-reports"

if ! yarn test:integration; then
  echo "Integration tests failed! Exiting..."
  yarn aftertest
  exit ${PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL}
fi

yarn aftertest

ls -al ${OKTA_HOME}/${REPO}/test-reports

echo ${TEST_SUITE_TYPE} > ${TEST_SUITE_TYPE_FILE}
echo ${TEST_RESULT_FILE_DIR} > ${TEST_RESULT_FILE_DIR_FILE}
exit ${PUBLISH_TYPE_AND_RESULT_DIR}
