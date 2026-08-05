#!/bin/bash
# Test Setup and Execution Script for Okta Node.js SDK
# Mirrors the pattern from okta-sdk-java/test-setup.sh
#
# Usage:
#   ./test-setup.sh setup    — Phase 1: Terraform init + apply (create resources)
#   ./test-setup.sh test     — Phase 2: Run generated tests with TF_OUTPUTS injected
#   ./test-setup.sh destroy  — Phase 3: Terraform destroy (clean up resources)
#   ./test-setup.sh all      — Run all three phases in sequence

set -e

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TERRAFORM_DIR="$BASE_DIR/terraform"
PHASE="${1:-all}"
GLOBAL_EXIT_CODE=0

# ─── Load credentials from okta-config.yaml ──────────────────────────────────
if [ -f "$BASE_DIR/okta-config.yaml" ]; then
  echo "--- Loading Okta configuration from okta-config.yaml ---"
  OKTA_ORG_NAME=$(grep "orgName:"   "$BASE_DIR/okta-config.yaml" | awk '{print $2}')
  OKTA_BASE_URL=$(grep "baseUrl:"   "$BASE_DIR/okta-config.yaml" | awk '{print $2}')
  OKTA_API_TOKEN=$(grep "apiToken:" "$BASE_DIR/okta-config.yaml" | awk '{print $2}')
  OKTA_CLIENT_ORGURL=$(grep "orgUrl:" "$BASE_DIR/okta-config.yaml" | awk '{print $2}')
  OKTA_CLIENT_TOKEN=$(grep "token:"   "$BASE_DIR/okta-config.yaml" | awk '{print $2}')
fi

export OKTA_ORG_NAME="${OKTA_ORG_NAME:-}"
export OKTA_BASE_URL="${OKTA_BASE_URL:-oktapreview.com}"
export OKTA_API_TOKEN="${OKTA_API_TOKEN:-}"
export OKTA_CLIENT_ORGURL="${OKTA_CLIENT_ORGURL:-}"
export OKTA_CLIENT_TOKEN="${OKTA_CLIENT_TOKEN:-}"

if [ -z "$OKTA_CLIENT_ORGURL" ] || [ -z "$OKTA_CLIENT_TOKEN" ]; then
  echo "❌ ERROR: Okta credentials not found!"
  echo "Create okta-config.yaml (see okta-config.yaml.example) or set env vars:"
  echo "  OKTA_CLIENT_ORGURL, OKTA_CLIENT_TOKEN, OKTA_ORG_NAME, OKTA_API_TOKEN"
  exit 1
fi

echo "✅ Okta credentials loaded (org: $OKTA_ORG_NAME)"

# ─── APIs to test (mirrors okta-sdk-java OKTA-1103933/test-setup.sh) ──────────
APIS=(
    "test_application_api"                        # 13 test cases
    "test_application_groups_api"                 # 4 test cases
    "test_application_policies_api"               # 1 test case
    "test_application_sso_api"                    # 2 test cases
    "test_application_users_api"                  # 5 test cases
    # "test_authenticator_api"                    # 23 test cases (commented out in Java SDK)
    "test_authorization_server_api"               # 7 test cases
    "test_authorization_server_assoc_api"         # 3 test cases
    "test_authorization_server_claims_api"        # 10 test cases
    "test_authorization_server_clients_api"       # 2 test cases
    "test_authorization_server_keys_api"          # 4 test cases
    "test_authorization_server_policies_api"      # 14 test cases
    "test_authorization_server_rules_api"         # 14 test cases
    "test_authorization_server_scopes_api"        # 10 test cases
    "test_behavior_api"                           # 13 test cases
    "test_brands_api"                             # 12 test cases
    "test_captcha_api"                            # 17 test cases
    "test_custom_domain_api"                      # 12 test cases
    "test_custom_pages_api"                       # 38 test cases
    "test_custom_templates_api"                   # 28 test cases
    "test_device_assurance_api"                   # 5 test cases
    "test_email_customization_api"                # 2 test cases
    "test_email_domain_api"                       # 12 test cases
    "test_email_server_api"                       # 11 test cases
    "test_event_hook_api"                         # 16 test cases
    "test_feature_api"                            # 10 test cases
    "test_group_api"                              # 22 test cases
    "test_group_owner_api"                        # 7 test cases
    "test_group_rule_api"                         # 23 test cases
    "test_identity_provider_api"                  # 13 test cases
    "test_identity_provider_keys_api"             # 8 test cases
    "test_identity_provider_signing_keys_api"     # 18 test cases
    "test_identity_provider_users_api"            # 11 test cases
    "test_inline_hook_api"                        # 15 test cases
    "test_linked_object_api"                      # 8 test cases
    "test_log_stream_api"                         # 14 test cases
    "test_network_zone_api"                       # 7 test cases
    "test_org_setting_communication_api"          # 6 test cases
    "test_org_setting_contact_api"                # 4 test cases
    "test_org_setting_customization_api"          # 2 test cases
    "test_org_setting_general_api"                # 6 test cases
    "test_org_setting_metadata_api"               # 2 test cases
    "test_org_setting_support_api"                # 8 test cases
    "test_policy_api"                             # 40 test cases
    "test_profile_mapping_api"                    # 6 test cases
    "test_push_provider_api"                      # 9 test cases
    "test_rate_limit_settings_api"                # 12 test cases
    "test_realm_api"                              # 9 test cases
    "test_role_assignment_a_user_api"             # 5 test cases
    "test_role_assignment_b_group_api"            # 4 test cases
    "test_role_b_target_admin_api"                # 18 test cases
    "test_role_b_target_b_group_api"              # 16 test cases
    "test_role_c_resource_set_api"                # 8 test cases
    "test_role_c_resource_set_resource_api"       # 4 test cases
    "test_role_d_resource_set_binding_api"        # 8 test cases
    "test_role_d_resource_set_binding_member_api" # 8 test cases
    "test_role_e_custom_api"                      # 10 test cases
    "test_role_e_custom_permission_api"           # 10 test cases
    "test_schema_api"                             # 23 test cases
    "test_subscription_api"                       # 16 test cases
    "test_system_log_api"                         # 1 test case
    "test_template_api"                           # 11 test cases
    "test_themes_api"                             # 18 test cases
    "test_threat_insight_api"                     # 4 test cases
    "test_trusted_origin_api"                     # 13 test cases
    "test_user_api"                               # 10 test cases
    "test_user_cred_api"                          # 7 test cases
    "test_user_grant_api"                         # 6 test cases
    "test_user_lifecycle_api"                     # 7 test cases
    "test_user_linked_object_api"                 # 2 test cases
    "test_user_o_auth_api"                        # 4 test cases
    "test_user_resources_api"                     # 3 test cases
    "test_user_sessions_api"                      # 1 test case
    "test_user_type_api"                          # 12 test cases
)
# Total: 76 APIs (mirrors Java SDK reference)

# ─── Orphaned resources to remove from TF state before destroy ───────────────
RESOURCES_TO_REMOVE=(
  'module.delete_oauth_app.okta_app_oauth.this[0]'
  'module.delete_authorization_server'
  'module.delete_authorization_server_policy_rule.okta_auth_server_policy_rule.this[0]'
  'module.delete_behavior_detection_rule.okta_behavior.this[0]'
  'module.delete_brand.okta_brand.this[0]'
  'module.delete_device_assurance_policy.okta_policy_device_assurance_android.this[0]'
  'module.splunk_cloud_ex.okta_log_stream.this[0]'
  'module.delete_push_provider.okta_push_provider.this[0]'
  'module.delete_realm.okta_realm.this[0]'
  'module.resource_set_for_delete_resource_set.okta_resource_set.this[0]'
  'module.delete_trusted_origin.okta_trusted_origin.this[0]'
  'module.delete_associated_server.okta_trusted_server.this[0]'
)

# ─── Helper: run terraform with credentials in environment ───────────────────
tf_run() {
  OKTA_ORG_NAME="$OKTA_ORG_NAME" \
  OKTA_BASE_URL="$OKTA_BASE_URL" \
  OKTA_API_TOKEN="$OKTA_API_TOKEN" \
  TF_VAR_okta_org_name="$OKTA_ORG_NAME" \
  TF_VAR_okta_base_url="$OKTA_BASE_URL" \
  TF_VAR_okta_api_token="$OKTA_API_TOKEN" \
  terraform "$@"
}

# ─── Phase 1: Terraform init + apply ─────────────────────────────────────────
run_phase_setup() {
  echo "=========================================="
  echo "--- Phase 1: Creating resources for all APIs ---"
  echo "=========================================="

  for API in "${APIS[@]}"; do
    TF_DIR="$TERRAFORM_DIR/$API"
    echo "--- 📦 Processing $API ---"

    if [ ! -d "$TF_DIR" ]; then
      echo "--- ⏭️  Skipping $API (no terraform directory) ---"
      continue
    fi

    cd "$TF_DIR" || { echo "❌ Cannot cd to $TF_DIR"; GLOBAL_EXIT_CODE=1; continue; }

    rm -rf .terraform .terraform.lock.hcl

    echo "--- Initializing Terraform for $API ---"
    if ! tf_run init --upgrade; then
      echo "❌ terraform init failed for $API"
      GLOBAL_EXIT_CODE=1
      cd "$BASE_DIR"
      continue
    fi

    echo "--- Applying Terraform for $API ---"
    if ! tf_run apply -auto-approve --parallelism=1; then
      echo "❌ terraform apply failed for $API"
      GLOBAL_EXIT_CODE=1
    fi

    cd "$BASE_DIR"
  done
}

# ─── Phase 2: Run tests ───────────────────────────────────────────────────────
run_phase_test() {
  echo "=========================================="
  echo "--- Phase 2: Running generated tests ---"
  echo "=========================================="

  TEST_COUNTER=0

  for API in "${APIS[@]}"; do
    TF_DIR="$TERRAFORM_DIR/$API"

    if [ ! -d "$TF_DIR" ]; then
      echo "--- ⏭️  Skipping $API (no terraform directory) ---"
      continue
    fi

    # Capture TF outputs before spawning subshell
    cd "$TF_DIR" || continue
    TF_OUTPUTS_DATA=$(tf_run output -json 2>/dev/null || echo '{}')
    # If terraform output returned empty {}, check for a manual override file
    if [ "$TF_OUTPUTS_DATA" = "{}" ] && [ -f "$TF_DIR/tf_outputs_override.json" ]; then
      echo "--- ⚠️  Using manual TF output override for $API ---"
      TF_OUTPUTS_DATA=$(cat "$TF_DIR/tf_outputs_override.json")
    fi
    cd "$BASE_DIR"

    # Convert test_user_api → UserApi → UserApiTest.test.js
    API_NAME="${API#test_}"      # remove "test_" prefix
    API_NAME="${API_NAME%_api}"  # remove "_api" suffix
    # Convert snake_case to PascalCase
    API_CLASS=$(echo "$API_NAME" | awk -F_ '{for(i=1;i<=NF;i++){printf "%s", toupper(substr($i,1,1)) substr($i,2)}}')

    # Find test file (case-insensitive to handle acronyms like CAPTCHA, UI, SSF)
    TEST_FILE=$(find "$BASE_DIR/src/generated/tests" -iname "${API_CLASS}ApiTest.test.js" 2>/dev/null | head -1)

    if [ -z "$TEST_FILE" ]; then
      echo "--- ⏭️  Skipping $API (no test file found for ${API_CLASS}ApiTest.test.js) ---"
      continue
    fi

    TEST_COUNTER=$((TEST_COUNTER + 1))

    (
      export TF_OUTPUTS="$TF_OUTPUTS_DATA"
      export OKTA_CLIENT_ORGURL="$OKTA_CLIENT_ORGURL"
      export OKTA_CLIENT_TOKEN="$OKTA_CLIENT_TOKEN"

      echo "--- 🧪 Testing $API → $(basename "$TEST_FILE") ---"
      if npx mocha "$TEST_FILE" --timeout 30000 2>&1; then
        echo "--- ✅ $API tests passed ---"
      else
        echo "--- ❌ $API tests failed ---"
        exit 1
      fi
    ) &
  done

  wait
  echo "--- ✅ All tests completed (ran $TEST_COUNTER test suites) ---"
}

# ─── Phase 3: Terraform destroy ──────────────────────────────────────────────
run_phase_destroy() {
  echo "=========================================="
  echo "--- Phase 3: Destroying resources ---"
  echo "=========================================="

  for API in "${APIS[@]}"; do
    TF_DIR="$TERRAFORM_DIR/$API"
    echo "--- 🗑️  Destroying $API ---"

    if [ ! -d "$TF_DIR" ]; then
      echo "--- ⏭️  Skipping $API (no terraform directory) ---"
      continue
    fi

    cd "$TF_DIR" || { echo "❌ Cannot cd to $TF_DIR"; GLOBAL_EXIT_CODE=1; continue; }

    # Remove orphaned resources from state (silently skip if not present)
    for RESOURCE in "${RESOURCES_TO_REMOVE[@]}"; do
      terraform state rm "$RESOURCE" 2>/dev/null || true
    done

    if ! tf_run destroy -auto-approve; then
      echo "❌ terraform destroy failed for $API"
      GLOBAL_EXIT_CODE=1
    else
      echo "--- ✅ $API destroy complete ---"
    fi

    cd "$BASE_DIR"
  done
}

# ─── Main ─────────────────────────────────────────────────────────────────────
case "$PHASE" in
  setup)
    set +e
    run_phase_setup
    ;;
  test)
    set +e
    run_phase_test
    ;;
  destroy)
    set +e
    run_phase_destroy
    ;;
  all)
    set +e
    run_phase_setup
    run_phase_test
    run_phase_destroy
    ;;
  *)
    echo "Usage: $0 [setup|test|destroy|all]"
    exit 1
    ;;
esac

echo "=========================================="
if [ $GLOBAL_EXIT_CODE -eq 0 ]; then
  echo "✅ Phase '$PHASE' completed successfully."
else
  echo "⚠️  Phase '$PHASE' completed with failures. Review output above."
fi
echo "=========================================="

exit $GLOBAL_EXIT_CODE
