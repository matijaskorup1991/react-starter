// package.json: "test": "jest -c jest.config.js --watch"
// jest bez konfiguracije: "test":"jest"

module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx, ts, tsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
};
