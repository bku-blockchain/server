/**
 * Define configures for app, database and ethereum
 */

const db = require('./db');
const app = require('./app');
const eth = require('./eth');

module.exports = {
  db,
  app,
  eth
};
