var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  moduleName: 'WE-VUE',
  extractCSS: 'style.min.css',
  extends: ['vue2', 'lint', 'sass', 'autoprefixer'],
  alias: config.alias,
  externals: { vue: config.externals.vue }
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'index.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('vue.preserveWhitespace', false);

module.exports = cooking.resolve();
