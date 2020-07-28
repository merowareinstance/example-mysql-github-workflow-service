module.exports = {
    testEnvironment: '<rootDir>/config/tests/test-environment.js',
    setupFilesAfterEnv: ['<rootDir>/config/tests/test-init.js'],
    globals: {
        NODE_ENV: 'test'
    }
}