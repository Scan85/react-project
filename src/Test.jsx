let assert = require('assert');

// init WebdriverIO
let client = require('webdriverio').remote({desiredCapabilities:{browserName: 'chrome'}})
// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()
    .url('http://localhost:8080/#/')
    .webdrivercss('startpage', [
        {
            name: 'app',
            elem: '#app'
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.header[0].isWithinMisMatchTolerance);
        assert.ok(res.hero[0].isWithinMisMatchTolerance);
    })
    .end();