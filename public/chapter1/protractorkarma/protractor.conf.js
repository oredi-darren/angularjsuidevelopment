(function() {
    'use strict';
    exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        framework: 'mocha',
        mochaOpts: {
            reporter: 'spec',
            slow: 3000,
            enableTimeouts: false
        },
        specs: ['test/protractor/spec.js'],
        capabilities: {
            browserName: 'chrome'
        }
    }
})();
