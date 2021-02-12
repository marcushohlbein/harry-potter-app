// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    src: '/',
    'node_modules/@fortawesome': {
      url: '/webfonts',
      static: true,
      resolve: false,
    },
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
  },
  plugins: [],
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
}
