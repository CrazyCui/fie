/**
 * @author 擎空 <zernmal@foxmail.com>
 * @exports fie-api
 */

'use strict';

const cache = require('fie-cache');
const config = require('fie-config');
const env = require('fie-env');
const fs = require('fie-fs');
const home = require('fie-home');
const log = require('fie-log');
const fieModule = require('fie-module');
const npm = require('fie-npm');
const task = require('fie-task');
const user = require('fie-user');

module.exports = {
  cache,
  log,
  fs,
  home,
  npm,
  task,
  user,
  config,
  env,
  module: fieModule
};
