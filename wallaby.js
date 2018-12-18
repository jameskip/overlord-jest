module.exports = function (wallaby) {
  return {
    files: [
      '!test.js'
    ],

    tests: [
      'test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'

  }
}
