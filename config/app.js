/**
 * Environemt Variables is defined in file `.env` at the top of project
 */

const ONE_HOUR = 60 * 60; // in seconds
const ONE_DAY = 24 * ONE_HOUR;

module.exports = {
  secretKey: process.env.SECRET_KEY || 'server secret key',
  tokenExpire: 4 * ONE_DAY + 12 * ONE_HOUR,

  email: {
    address: process.env.EMAIL_ADDRESS || 'server email address',
    password: process.env.EMAIL_PASSWORD || 'server email password'
  },

  staticURL: 'http://static.most.bkchain.tk'
};
