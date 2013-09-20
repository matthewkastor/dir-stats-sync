var dirStatsSync = require('../src/dir-stats-sync.js');
var fs = require('fs');
var path = require('path');
var specPath = path.resolve(__dirname, '../browser/tests/dir-stats-sync.test.js');
var specCode = fs.readFileSync(specPath, "utf8");
eval(specCode);
