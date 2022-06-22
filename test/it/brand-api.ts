import {
  Client,
  v3
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
    const collection = await client.listBrands();
    await collection.each(brand => brands.push(brand));
    expect(brands.length).to.be.greaterThanOrEqual(1);

    const brand = await client.getBrand(brands[0].id);
    const originalFlagValue = brand.removePoweredByOkta;
    brand.removePoweredByOkta = !originalFlagValue;
    const updatedBrand = await client.updateBrand(brand.id, brand);
    expect(updatedBrand.removePoweredByOkta).to.equal(!originalFlagValue);
  });

  describe('Brand Theme API', () => {

    it('lists all Brand Themes, gets Brand Theme by ID and updates it', async () => {
      const { value: brand } = await (await client.listBrands()).next();
      const themes = [];
      await (await client.listBrandThemes(brand.id)).each(theme => themes.push(theme));
      expect(themes.length).to.be.greaterThanOrEqual(1);

      const theme = await client.getBrandTheme(brand.id, themes[0].id);
      const originalColorValue = theme.primaryColorHex;
      const newColorValue = '#badbed';
      const themeOptions: v3.Theme = {
        primaryColorHex: '#ecaffe',
        secondaryColorHex: '#ebebed',
        signInPageTouchPointVariant: 'OKTA_DEFAULT',
        endUserDashboardTouchPointVariant: 'OKTA_DEFAULT',
        errorPageTouchPointVariant: 'OKTA_DEFAULT',
        emailTemplateTouchPointVariant: 'OKTA_DEFAULT'
      };
      const themeResponse = await client.updateBrandTheme(brand.id, theme.id, {
        ...themeOptions,
        primaryColorHex: newColorValue
      });

      expect(themeResponse.primaryColorHex).to.equal(newColorValue);
      await client.updateBrandTheme(brand.id, theme.id, {
        ...themeOptions,
        primaryColorHex: originalColorValue,
      });
    });

    it('uploads and deletes Theme background image', async () => {
      const { value: brand } = await (await client.listBrands()).next();
      const { value: theme } = await (await client.listBrandThemes(brand.id)).next();
      const file = utils.getMockImage('logo.png');
      const response = await client.uploadBrandThemeBackgroundImage(brand.id, theme.id, file);
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.deleteBrandThemeBackgroundImage(brand.id, theme.id);
      expect(deleteResponse).to.be.undefined;
    });

    it('uploads and deletes Theme favicon', async () => {
      const { value: brand } = await (await client.listBrands()).next();
      const { value: theme } = await (await client.listBrandThemes(brand.id)).next();
      const file = utils.getMockImage('favicon.png');
      const response = await client.uploadBrandThemeFavicon(brand.id, theme.id, file);
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.deleteBrandThemeFavicon(brand.id, theme.id);
      expect(deleteResponse).to.be.undefined;
    });

    it('uploads and deletes Theme logo image', async () => {
      const { value: brand } = await (await client.listBrands()).next();
      const { value: theme } = await (await client.listBrandThemes(brand.id)).next();
      const file = utils.getMockImage('logo.png');
      const response = await client.uploadBrandThemeLogo(brand.id, theme.id, file);
      expect(response.url).to.be.not.empty;

      const deleteResponse = await client.deleteBrandThemeLogo(brand.id, theme.id);
      expect(deleteResponse).to.be.undefined;
    });
  });
});
