/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line node/no-unpublished-require
const dotenv = require('dotenv');

dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI,
  apiVersion: process.env.API_VERSION,
};

module.exports = { config };
