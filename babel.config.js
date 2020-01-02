// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  ignore: ['node_modules', 'build'],
};
