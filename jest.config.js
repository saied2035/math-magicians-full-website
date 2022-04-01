module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: { '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js' },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
