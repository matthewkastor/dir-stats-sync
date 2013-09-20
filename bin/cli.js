#!/usr/bin/env node
var dirStatsSync = require('../src/dir-stats-sync.js');
var argz = Array.prototype.slice.call(process.argv);
console.log(dirStatsSync.apply(argz));