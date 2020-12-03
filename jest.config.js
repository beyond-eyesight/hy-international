const path = require('path');

module.exports = {
  verbose: true,
  preset: 'react-native',
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // todo: https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript 에
  //  이 설정이 있는데 설정을 넣으면 테스트가 돌아가지 않는다.
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest'
  // },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
