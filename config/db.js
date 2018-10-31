/**
 * Environemt Variables is defined in file `.env` at the top of project
 */

module.exports = {
  uriMongo: process.env.URI_MONGO || 'mongodb://localhost/MoST'
};
