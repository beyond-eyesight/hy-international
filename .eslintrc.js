module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-restricted-syntax': 0,
    'react/jsx-props-no-spreading': ['warn'],
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
