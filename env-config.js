const config = require('dotenv').config();
console.log("Config",config ,config._FIREBASE_API_KEY );
module.exports = {
  'process.env._FIREBASE_API_KEY': `${config.parsed._FIREBASE_API_KEY}`,
  'process.env._GOOGLE_API_KEY' : `${config.parsed._GOOGLE_API_KEY}`
}