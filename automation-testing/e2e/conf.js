exports.config = {
  // The address of a running selenium server.
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000,

  },

  //specs: ['spec/loginSpec/login.spec.js'],

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  
  specs: [ 'example-spec.js'
    ],

  // Options to be passed to Jasmine-node.

};

