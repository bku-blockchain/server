/**
 * Define configures for app, database and ethereum
 */

const db = require('./db');
const app = require('./app');
const eth = require('./eth');
const aws = require('./aws');

module.exports = {
  db,
  app,
  eth,
  aws
};
