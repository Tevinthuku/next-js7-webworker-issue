Reproducing the error (with next@7.0,2)

1. `npm install`
2. `npm run dev`

Error dissapears with next@6.1.1

1. `npm install next@6.1.1`
2. `npm run dev`
3. Everying works as expected

### Resolved

Please visit https://github.com/webpack/webpack/issues/6642 for more information in the mean time

in your `next.config.js`

```js
const withWorkers = require("@zeit/next-workers");
module.exports = withWorkers({
  webpack(config, options) {
    // add this to make the web workers work in next js version 7
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  }
});
```

and the error goes away :)
