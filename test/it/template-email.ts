import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  EmailTemplate,
  EmailTemplateContent
} from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/template-email`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

async function getBrandId() {
  const { value: brand } = await client.listBrands().next();
  return brand.id;
}

describe('Email Template API', () => {
  let brandId;
  let template;
  beforeEach(async () => {
    brandId = await getBrandId();
    const item = await client.listEmailTemplates(brandId).next();
    template = item.value;
  });

  describe('List templates', () => {
    it('should return a Collection', async () => {
      const templates = await client.listEmailTemplates(brandId);
      expect(templates).to.be.instanceOf(Collection);
      let counter = 0;
      await templates.each(template => {
        expect(template).to.be.instanceOf(EmailTemplate);
        counter++;
      });
      expect(counter).to.be.greaterThan(1);
    });
  });

  it('can get template', async () => {
    const { value } = await client.listEmailTemplates(brandId).next();
    const template = await client.getEmailTemplate(brandId, value.name);
    expect(template.name).to.equal(value.name);
  });

  it('can get email template default content', async () => {
    const res = await client.getEmailTemplateDefaultContent(brandId, template.name);
    expect(res).to.be.instanceOf(EmailTemplateContent);
  });

  it('can get email template default content preview', async () => {
    const res = await client.getEmailTemplateDefaultContentPreview(brandId, template.name);
    expect(res).to.be.instanceOf(EmailTemplateContent);
  });

  it('can send test email', async () => {
    const res = await client.sendTestEmail(brandId, template.name, {});
    expect(res.status).to.equal(204);
  });

  describe('Template Customizations', () => {
    const templateName = 'forgotPassword';
    const body = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n<html>\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n</head>\n<body>\n<div style="background-color: ${brand.theme.secondaryColor}; margin: 0">\n    <table style="font-family: \'Proxima Nova\', \'Century Gothic\', Arial, Verdana, sans-serif; font-size: 14px; color: #5e5e5e; width:98%; max-width: 600px; float: none; margin: 0 auto;" border="0" cellpadding="0" cellspacing="0" valign="top" align="left">\n        <tr align="middle"><td style="padding-top: 30px; padding-bottom: 32px;"><img src="${brand.theme.logo}" height="37"></td></tr>\n        <tr bgcolor="#ffffff"><td>\n            <table bgcolor="#ffffff" style="width: 100%; line-height: 20px; padding: 32px; border: 1px solid; border-color: #f0f0f0;" cellpadding="0">\n                <tr>\n                    <td style="color: #5e5e5e; font-size: 22px; line-height: 22px;">\n                        ${org.name} - Okta Password Reset Requested\n                    </td>\n                </tr>\n                <tr>\n                    <td style="padding-top: 24px; vertical-align: bottom;">\n                        Hi $!{StringTool.escapeHtml($!{user.profile.firstName})},\n                    </td>\n                </tr>\n                <tr>\n                    <td style="padding-top: 24px;">\n                        A password reset request was made for your Okta account. If you did not make this request, please contact your system administrator immediately.\n                    </td>\n                </tr>\n                <tr>\n                    <td style="padding-top: 24px;">\n                        Click this link to reset the password for your username, ${user.profile.login}:\n                    </td>\n                </tr>\n                <tr>\n                    <td align="center">\n                        <table border="0" cellpadding="0" cellspacing="0" valign="top">\n                            <tr>\n                                <td align="center" style="height: 32px; padding-top: 24px; padding-bottom: 16px;">\n                                    <a id="reset-password-link" href="${resetPasswordLink}" style="text-decoration: none;"><span style="padding: 9px 32px 7px 31px; border: 1px solid; text-align: center; cursor: pointer; color: #fff; border-radius: 3px; background-color: ${brand.theme.primaryColor}; border-color: ${brand.theme.primaryColor}; box-shadow: 0 1px 0 ${brand.theme.primaryColor};">Reset Password</span></a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align="center" style="color: #999;">\n                                    This link expires in ${f.formatTimeDiffDateNowInUserLocale(${resetPasswordTokenExpirationDate})}.\n                                </td>\n                            </tr>\n                            #if(${oneTimePassword})\n                            <tr>\n                                <td align="center" style="padding-top: 16px;">\n                                    Can\'t use the link? Enter a code instead: <b>${oneTimePassword}</b>\n                                </td>\n                            </tr>\n                            #end\n                        </table>\n                    </td>\n                </tr>\n                <tr>\n                    <td style="padding-top: 24px;">\n                        If you experience difficulties accessing your account, send a help request to your administrator:\n                    </td>\n                </tr>\n                <tr>\n                    <td style="padding-top: 24px;">\n                        Go to your <a href="${baseURL}/help/login" style="color: #007dc1; text-decoration: none;"><span style="color: #007dc1; text-decoration: none;">Sign-in Help</span></a> page. Then click the Request help link.\n                    </td>\n                </tr>\n            </table>\n        </td></tr>\n        <tr>\n            <td style="font-size: 12px; padding: 16px 0 30px 50px; color: #999;">\n                This is an automatically generated message from <a href="https://www.okta.com" style="color: rgb(97,97,97);">Okta</a>. Replies are not monitored or answered.\n            </td>\n        </tr>\n    </table>\n</div>\n</body>\n</html>\n';

    afterEach(async () => {
      await client.deleteEmailTemplateCustomizations(brandId, templateName);
    });

    it('can create/list/get/update template customizations', async () => {
      const customizationRequest = {
        subject: 'fake subject',
        language: 'en',
        body
      };
      // create
      const customization = await client.createEmailTemplateCustomization(brandId, templateName, customizationRequest);
      expect(customization.subject).to.equal('fake subject');

      // list
      const customizations = [];
      await client.listEmailTemplateCustomizations(brandId, templateName)
        .each(customization => customizations.push(customization));
      expect(customizations.length).to.be.greaterThanOrEqual(1);

      // get
      const newCustomization = await client.getEmailTemplateCustomization(brandId, templateName, customization.id);
      expect(newCustomization.id).to.equal(customization.id);

      // get preview
      const preview = await client.getEmailTemplateCustomizationPreview(brandId, templateName, customization.id);
      expect(preview).to.be.instanceOf(EmailTemplateContent);

      // update
      const updatedCustomization = await client.updateEmailTemplateCustomization(brandId, templateName, customization.id, {
        subject: 'updated subject',
        language: 'en',
        isDefault: true,
        body
      });
      expect(updatedCustomization.subject).to.equal('updated subject');

      // delete
      const nonDefaultTemplate = await client.createEmailTemplateCustomization(brandId, templateName, {
        subject: 'fake subject - es',
        language: 'es',
        body
      });
      const res = await client.deleteEmailTemplateCustomization(brandId, templateName, nonDefaultTemplate.id);
      expect(res.status).to.equal(204);
    });

  });
});
