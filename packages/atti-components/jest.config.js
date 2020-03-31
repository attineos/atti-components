module.exports = {
  moduleFileExtensions: ['web.js', 'js'],
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>src/config/setupTests.js'],
  moduleNameMapper: {
    '^styleguide(.*)$': '<rootDir>/styleguide$1',
  },
}
