// next.config.js
const withWorkers = require("@zeit/next-workers");
module.exports = withWorkers({
  webpack(config, options) {
    // add this to make the web workers work in next js version 7
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  }
});
