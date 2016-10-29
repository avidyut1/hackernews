#!/usr/bin/env node
'use strict';
var program = require('commander');
var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));

var article = require('./lib/article')

program.version(pkg.version);

program.option('-p, --page <page>', 'Page number');

program.parse(process.argv);
article.showPage(program.page);