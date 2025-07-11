
import {
  Client,
  DefaultRequestExecutor
} from '..';
import * as utils from './utils';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

async function cleanInlineHooks() {
  let deletedCnt = 0;
  const collection = await client.inlineHookApi.listInlineHooks();
  await collection.each(async (inlineHook) => {
    const canDelete = inlineHook.name?.startsWith('node-sdk: ');
    if (canDelete) {
      await client.inlineHookApi.deactivateInlineHook({
        inlineHookId: inlineHook.id!
      });
      await client.inlineHookApi.deleteInlineHook({
        inlineHookId: inlineHook.id!
      });
      deletedCnt++;
    } else {
      console.log(`Skipped inline hook to remove ${inlineHook.name}`);
    }
  });
  return deletedCnt;
}

async function cleanDomains() {
  const emailDomains = await client.emailDomainApi.listEmailDomains({});
  const emailDomainIds: string[] = [];
  await emailDomains.each(ed => {
    if (ed.domain?.endsWith('example.com') || ed.domain?.endsWith('acme.com')) {
      emailDomainIds.push(ed.id!);
    }
  });
  for (const emailDomainId of emailDomainIds) {
    await client.emailDomainApi.deleteEmailDomain({ emailDomainId: emailDomainId });
  }

  let deletedDomainsCnt = 0;
  const domains = await client.customDomainApi.listCustomDomains();
  for (const domain of domains.domains!) {
    const canDelete = domain.certificateSourceType === 'MANUAL';
    if (canDelete) {
      await client.customDomainApi.deleteCustomDomain({
        domainId: domain.id!
      });
      deletedDomainsCnt++;
    } else {
      console.log(`Skipped domain to remove ${domain.domain}`);
    }
  }

  const brands = await client.customizationApi.listBrands();
  const brandIdsToDelete: string[] = [];
  await brands.each(brand => {
    if (brand?.name?.match(/^.+\.example\.com$/) || brand?.name?.endsWith('acme.com')) {
      brandIdsToDelete.push(brand.id!);
    }
  });
  for (const brandId of brandIdsToDelete) {
    await client.customizationApi.deleteBrand({ brandId });
  }

  return brandIdsToDelete.length + emailDomainIds.length + deletedDomainsCnt;
}

async function cleanAuthorizationServers() {
  let deletedCnt = 0;
  await (await client.authorizationServerApi.listAuthorizationServers()).each(
    async authorizationServer => {
      const canDelete = authorizationServer.name !== 'default';
      if (canDelete) {
        await client.authorizationServerApi.deleteAuthorizationServer({
          authServerId: authorizationServer.id!
        });
        deletedCnt++;
      } else {
        console.log(`Skipped authorization server to remove ${authorizationServer.name}`);
      }
    }
  );
  return deletedCnt;
}

async function cleanNetworkZones() {
  let deletedCnt = 0;
  await (await client.networkZoneApi.listNetworkZones()).each(
    async networkZone => {
      const canDelete = networkZone.name?.startsWith('node-sdk: ');
      if (canDelete) {
        try {
          if (networkZone.status === 'ACTIVE') {
            await client.networkZoneApi.deactivateNetworkZone({
              zoneId: networkZone.id!,
            });
          }
          await client.networkZoneApi.deleteNetworkZone({
            zoneId: networkZone.id!,
          });
          deletedCnt++;
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log(`Skipped network zone to remove ${networkZone.name}`);
      }
    }
  );
  return deletedCnt;
}

async function cleanApplications() {
  let deletedCnt = 0;
  await (await client.applicationApi.listApplications()).each(async application => {
    const canDelete = ![
      'Okta Admin Console',
      'Okta Dashboard',
      'Okta Browser Plugin',
      'Node SDK Service App',
      'Bacon Service Client'
    ].includes(application.label!) && application.label!.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await utils.removeAppByLabel(client, application.label!);
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped application to remove ${application.label}`);
    }
  });
  return deletedCnt;
}

async function cleanTestUsers() {
  let deletedCnt = 0;
  await (await client.userApi.listUsers()).each(async user => {
    const canDelete = !user.profile!.email!.endsWith('okta.com');
    if (canDelete) {
      try {
        await utils.deleteUser(user, client);
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped user to remove ${user.profile!.email}`);
    }
  });
  return deletedCnt;
}

async function cleanTestGroups() {
  let deletedCnt = 0;
  await (await client.groupApi.listGroups()).each(async (group) => {
    const canDelete = group.profile!.name !== 'Everyone' && group.profile!.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await utils.cleanupGroup(client, group);
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped group to remove ${group.profile!.name}`);
    }
  });
  return deletedCnt;
}

async function cleanTrustedOrigins() {
  let deletedCnt = 0;
  await (await client.trustedOriginApi.listTrustedOrigins()).each(async (origin) => {
    const canDelete = origin.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.trustedOriginApi.deactivateTrustedOrigin({
          trustedOriginId: origin.id!
        });
        await client.trustedOriginApi.deleteTrustedOrigin({
          trustedOriginId: origin.id!
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped trusted origin to remove ${origin.name}`);
    }
  });
  return deletedCnt;
}

async function cleanTestGroupRules() {
  let deletedCnt = 0;
  await (await client.groupApi.listGroupRules()).each(async (rule) => {
    const canDelete = rule.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        if (rule.status !== 'INVALID') {
          await client.groupApi.deactivateGroupRule({ruleId: rule.id!});
        }
        await client.groupApi.deleteGroupRule({ruleId: rule.id!});
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped group rule to remove ${rule.name}`);
    }
  });
  return deletedCnt;
}

async function cleanTestPolicies() {
  let deletedCnt = 0;
  await (await client.policyApi.listPolicies({ type: 'OKTA_SIGN_ON' })).each(async policy => {
    const canDelete = policy.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.policyApi.deletePolicy({
          policyId: policy.id!
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped policy to remove ${policy.name}`);
    }
  });
  return deletedCnt;
}

async function cleanTestIdps() {
  let deletedCnt = 0;
  await (await client.identityProviderApi.listIdentityProviders()).each(async idp => {
    const canDelete = idp.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.identityProviderApi.deactivateIdentityProvider({ idpId: idp.id! });
        await client.identityProviderApi.deleteIdentityProvider({ idpId: idp.id! });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped IDP to remove ${idp.name}`);
    }
  });
  return deletedCnt;
}

async function getBrandId() {
  const { value: brand } = await (await client.customizationApi.listBrands()).next();
  return brand ? brand.id : null;
}

async function cleanEmailCustomizations() {
  let deletedCnt = 0;
  const templateName = 'ForgotPassword';
  const brandId: string = await getBrandId() as string;

  const list = await client.customizationApi.listEmailCustomizations({
    brandId,
    templateName,
  });
  await list.each(async ec => {
    const canDelete = (ec.subject.includes('fake subject') || ec.subject.includes('updated subject')) && !ec.isDefault;
    if (canDelete) {
      try {
        await client.customizationApi.deleteEmailCustomization({
          customizationId: ec.id!,
          brandId,
          templateName
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped Email customization to remove ${ec.subject} for language ${ec.language}`);
    }
  });
  return deletedCnt;
}

async function cleanUserTypes() {
  let deletedCnt = 0;
  const userTypes = await client.userTypeApi.listUserTypes();
  await userTypes.each(async t => {
    const canDelete = t.displayName?.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: t.id!
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped user type to remove ${t.displayName}`);
    }
  });
  return deletedCnt;
}

async function cleanResourceSets() {
  let deletedCnt = 0;
  const resourceSets = await client.resourceSetApi.listResourceSets();
  for (const resourceSet of resourceSets.resource_sets ?? []) {
    const canDelete = resourceSet.label?.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await client.resourceSetApi.deleteResourceSet({
          resourceSetId: resourceSet.id!,
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped resource set to remove ${resourceSet.label}`);
    }
  }
  return deletedCnt;
}

async function cleanCustomRoles() {
  let deletedCnt = 0;
  const customRoles = await client.customRoleApi.listRoles({});
  for (const role of customRoles.roles ?? []) {
    const canDelete = role.label?.startsWith('node-sdk: ');
    if (canDelete) {
        try {
          await client.customRoleApi.deleteRole({
            roleIdOrLabel: role.id!
          });
          deletedCnt++;
        } catch (err) {
          console.error(err);
        }
    } else {
      console.log(`Skipped role to remove ${role.label}`);
    }
  }
  return deletedCnt;
}

async function cleanCaptchas() {
  // unset org captcha instance
  const settings = await client.captchaApi.getOrgCaptchaSettings();
  if (settings.captchaId) {
    const orgInstance = await client.captchaApi.getCaptchaInstance({
      captchaId: settings.captchaId
    });
    if (orgInstance.name?.startsWith('node-sdk: ')) {
      try {
        await client.captchaApi.replacesOrgCaptchaSettings({
          orgCAPTCHASettings: {
            captchaId: null
          }
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped captcha to unset ${orgInstance.name}`);
    }
  }

  // delete captcha instances
  let deletedCnt = 0;
  const instancesCollection = await client.captchaApi.listCaptchaInstances();
  await instancesCollection.each(async instance => {
    const canDelete = instance.name?.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await client.captchaApi.deleteCaptchaInstance({
          captchaId: instance.id!
        });
        deletedCnt++;
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped captcha to remove ${instance.name}`);
    }
  });
  return deletedCnt;
}


describe('Clean', () => {
  it('all test resources', async () => {
    const res = {
      NetworkZones: await cleanNetworkZones(),
      AuthorizationServers: await cleanAuthorizationServers(),
      Users: await cleanTestUsers(),
      GroupRules: await cleanTestGroupRules(),
      Groups: await cleanTestGroups(),
      TrustedOrigins: await cleanTrustedOrigins(),
      Applications: await cleanApplications(),
      Domains: await cleanDomains(),
      InlineHooks: await cleanInlineHooks(),
      Policies: await cleanTestPolicies(),
      Idps: await cleanTestIdps(),
      EmailCustomizations: await cleanEmailCustomizations(),
      UserTypes: await cleanUserTypes(),
      ResourceSets: await cleanResourceSets(),
      CustomRoles: await cleanCustomRoles(),
      CAPTCHA: await cleanCaptchas(),
    };
    console.log('Clean result: ', res);
  });
});
