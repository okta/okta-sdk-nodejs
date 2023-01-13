import {
  Client,
  Theme,
} from '@okta/okta-sdk-nodejs';

import { expect } from 'chai';

import utils = require('../utils');

const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});


describe('Brand API', () => {
  it('lists all Brands, gets Brand by ID and updates it', async () => {
    const brands = [];
    const collection = await client.customizationApi.listBrands();
    await collection.each(brand => brands.push(brand));
    expect(brands.length).to.be.greaterThanOrEqual(1);

    const brand = await client.customizationApi.getBrand({brandId: brands[0].id});
    const originalFlagValue = brand.removePoweredByOkta;
    brand.removePoweredByOkta = !originalFlagValue;
    const updatedBrand = await client.customizationApi.replaceBrand({brandId: brand.id, brand});
    expect(updatedBrand.removePoweredByOkta).to.equal(!originalFlagValue);
  });

  describe('Brand Theme API', () => {

    it('lists all Brand Themes, gets Brand Theme by ID and updates it', async () => {
      const { value: brand } = await (await client.customizationApi.listBrands()).next();
      const themes = [];
      await (await client.customizationApi.listBrandThemes({brandId: brand.id})).each(theme => themes.push(theme));
      expect(themes.length).to.be.greaterThanOrEqual(1);

      const theme = await client.customizationApi.getBrandTheme({brandId: brand.id, themeId: themes[0].id});
      const originalColorValue = theme.primaryColorHex;
      const newColorValue = '#badbed';
      const themeOptions: Theme = {
        primaryColorHex: '#ecaffe',
        secondaryColorHex: '#ebebed',
        signInPageTouchPointVariant: 'OKTA_DEFAULT',
        endUserDashboardTouchPointVariant: 'OKTA_DEFAULT',
        errorPageTouchPointVariant: 'OKTA_DEFAULT',
        emailTemplateTouchPointVariant: 'OKTA_DEFAULT'
      };
      const themeResponse = await client.customizationApi.replaceBrandTheme({brandId: brand.id, themeId: theme.id,
        theme: {
          ...themeOptions,
          primaryColorHex: newColorValue
        }
      });

      expect(themeResponse.primaryColorHex).to.equal(newColorValue);
      await client.customizationApi.replaceBrandTheme({brandId: brand.id, themeId: theme.id,
        theme: {
          ...themeOptions,
          primaryColorHex: originalColorValue
        }
      });
    });

    it('uploads and deletes Theme background image', async () => {
      const { value: brand } = await (await client.customizationApi.listBrands()).next();
      const { value: theme } = await (await client.customizationApi.listBrandThemes({brandId: brand.id})).next();
      const file = utils.getMockImage('logo.png');
      const response = await client.customizationApi.uploadBrandThemeBackgroundImage({brandId: brand.id, themeId: theme.id, file});
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.customizationApi.deleteBrandThemeBackgroundImage({brandId: brand.id, themeId: theme.id});
      expect(deleteResponse).to.be.undefined;
    });

    it('uploads and deletes Theme favicon', async () => {
      const { value: brand } = await (await client.customizationApi.listBrands()).next();
      const { value: theme } = await (await client.customizationApi.listBrandThemes({brandId: brand.id})).next();
      const file = utils.getMockImage('favicon.png');
      const response = await client.customizationApi.uploadBrandThemeFavicon({brandId: brand.id, themeId: theme.id, file});
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.customizationApi.deleteBrandThemeFavicon({brandId: brand.id, themeId: theme.id});
      expect(deleteResponse).to.be.undefined;
    });

    it('uploads and deletes Theme logo image', async () => {
      const { value: brand } = await (await client.customizationApi.listBrands()).next();
      const { value: theme } = await (await client.customizationApi.listBrandThemes({brandId: brand.id})).next();
      const file = utils.getMockImage('logo.png');
      const response = await client.customizationApi.uploadBrandThemeLogo({brandId: brand.id, themeId: theme.id, file});
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.customizationApi.deleteBrandThemeLogo({brandId: brand.id, themeId: theme.id});
      expect(deleteResponse).to.be.undefined;
    });
  });
});
