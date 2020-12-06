const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~/*': path.resolve(__dirname, '.'),
          assets: './assets',
          test: './test',
          underscore: 'lodash'
        }
      }
    ]
  ]
};
