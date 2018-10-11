const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
module.exports = {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60
  },
  ...withSass(withImages())
};
