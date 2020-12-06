module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/*': './src',
          test: './test',
          underscore: 'lodash'
        },
        cwd: 'babelrc'
      }
    ]
  ]
};
