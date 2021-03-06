module.exports = {
  'setupTestFrameworkScriptFile': 'jest-extended',
  'collectCoverage': true,
  'collectCoverageFrom': [
    'leetbot/**/*.js',
    'util/**/*.js'
  ],
  'coverageReporters': [
    'json',
    'html',
    'lcov'
  ],
  'setupFiles': ['<rootDir>/node_modules/babel-polyfill/dist/polyfill.js'],
  'transform': {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
