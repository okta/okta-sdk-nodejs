#! /usr/bin/env node

const fs = require('fs');
const globby = require('globby');
const path = require('path');

const bannerSourcePath = path.join(__dirname, '..', 'templates', 'license-banner.txt');
const files = globby.sync([
  path.join(__dirname, '..', 'src', '**/*.js'),
  path.join(__dirname, '..', 'src/types', '**/*.d.ts')
]);
const bannerSource = fs.readFileSync(bannerSourcePath).toString();
const copyrightRegex = /(Copyright \(c\) )([0-9]+)-?([0-9]+)?/;
const match = bannerSource.match(copyrightRegex);
const firstYear = match[2];
const currentYear = new Date().getFullYear().toString();

if (firstYear !== currentYear) {
  fs.writeFileSync(bannerSourcePath, bannerSource.replace(copyrightRegex, `$1$2-${currentYear}`));
}

files.forEach(file => {
  const contents = fs.readFileSync(file).toString();
  const match = contents.match(copyrightRegex);
  if (!match) {
    return fs.writeFileSync(file, bannerSource + '\n\n' + contents);
  }
  const firstYear = match[2];
  if (firstYear !== currentYear) {
    return fs.writeFileSync(file, contents.replace(copyrightRegex, `$1$2-${currentYear}`));
  }
});
