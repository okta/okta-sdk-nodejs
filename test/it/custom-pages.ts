import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  ErrorPage,
  PageRoot,
  Brand,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

async function getBrandId() {
  const { value: brand } = await (await client.customizationApi.listBrands()).next();
  return brand.id;
}

describe('Custom Pages API', () => {
  let brandId: string;
  let customBrand: Brand;

  before(async () => {
    brandId = await getBrandId();

    const brandName = `node-sdk: Brand ${faker.random.word()}`.substring(0, 49);
    customBrand = await client.customizationApi.createBrand({
      CreateBrandRequest: {
        name: brandName
      }
    });
  });

  after(async () => {
    if (customBrand) {
      await client.customizationApi.deleteBrand({
        brandId: customBrand.id
      });
    }
  });

  describe('Error Page', () => {
    it('Get', async () => {
      const errorPage = await client.customizationApi.getErrorPage({
        brandId,
        expand: [
          'default', 'customized', 'customizedUrl', 'preview', 'previewUrl'
        ]
      });
      expect(errorPage).to.be.instanceOf(PageRoot);
      expect(errorPage._embedded._default.pageContent).to.include('<html>');
    });

    it('Replace customized', async () => {
      const currentErrorPage = await client.customizationApi.getErrorPage({
        brandId: customBrand.id,
        expand: [
          'default', 'customized', 'customizedUrl', 'preview', 'previewUrl'
        ]
      });
      const currentContent = currentErrorPage._embedded._default.pageContent;

      const errorPage = new ErrorPage();
      errorPage.pageContent = currentContent.replace(
        '<title>{{orgName}} - {{errorSummary}}</title>',
        '<title>Test - {{orgName}} - {{errorSummary}}</title>'
      );
      const newErrorPage = await client.customizationApi.replaceCustomizedErrorPage({
        brandId: customBrand.id,
        ErrorPage: errorPage,
      });
      expect(newErrorPage).to.be.instanceOf(ErrorPage);
      expect(newErrorPage.pageContent).to.include('Test - {{orgName}}');
    });

    it('Delete customized', async () => {
      let customizedErrorPage = await client.customizationApi.getCustomizedErrorPage({
        brandId: customBrand.id,
      });
      expect(customizedErrorPage).to.be.instanceOf(ErrorPage);

      await client.customizationApi.deleteCustomizedErrorPage({
        brandId: customBrand.id,
      });

      try {
        customizedErrorPage = await client.customizationApi.getCustomizedErrorPage({
          brandId: customBrand.id,
        });
      } catch (e) {
        expect(e.status).to.equal(404);
        customizedErrorPage = undefined;
      }
      expect(customizedErrorPage).to.be.undefined;
    });
  });

  describe('Sign-in Widget', () => {
    it('Get versions', async () => {
      const versionCollection = await client.customizationApi.listAllSignInWidgetVersions({
        brandId: customBrand.id,
      });
      const versions: string[] = [];
      await versionCollection.each(v => versions.push(v));
      expect(versions.length).to.be.greaterThan(2);
      expect(versions).to.include('^7');
    });
  });
});
