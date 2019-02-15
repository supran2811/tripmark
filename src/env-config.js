const config = require("dotenv").config();
module.exports = {
  "process.env._FIREBASE_API_KEY": `${config.parsed._FIREBASE_API_KEY}`,
  "process.env._GOOGLE_API_KEY" : `${config.parsed._GOOGLE_API_KEY}`,
  "process.env._FIREBASE_DOMAIN_NAME":`${config.parsed._FIREBASE_DOMAIN_NAME}`,
  "process.env._FIREBASE_DATABASE_URL":`${config.parsed._FIREBASE_DATABASE_URL}`,
  "process.env._FIREBASE_PROJECT_ID":`${config.parsed._FIREBASE_PROJECT_ID}`,
  "process.env.__RESTAPI_BASEURL" : `${config.parsed.__RESTAPI_BASEURL}`
};