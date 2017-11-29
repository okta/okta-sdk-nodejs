#! /usr/bin/env node

/**
 * This file transforms the README into another markdown file that is used as the home page for the JsDoc site
 *
 * The things we want to transform are:
 *
 * - Removing the table-of-contents for the examples, because the JsDoc site has it's own TOC sidebar
 * - Removing the "warning" and "construction" icons from the Alpha banner, because those only render on Github
 */
const fs = require('fs');

const lines = fs.readFileSync(__dirname + '/../README.md').toString().split('\n');

let skip = false;

const filtered = lines.filter(line => {
  if (line === '## Examples') {
    skip = true;
    return true;
  }
  if (line === '### Users') {
    skip = false;
    return true;
  }
  if (!skip) {
    return true;
  }
});

const transformed = filtered.map(line => {
  if (line.includes('## :warning: :construction: Alpha Preview :construction: :warning:')) {
    return '## Alpha Preview'
  }
  return line;
})

console.log(transformed.join('\n'))