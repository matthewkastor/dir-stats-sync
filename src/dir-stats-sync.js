/*jslint
    white : true,
    vars : true,
    node : true,
    stupid : true
*/
/**
 * Node module to get stats of every item in a directory.
 * @fileOverview Node module to get stats of every item in a directory.
 * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
 */

 /** @private */
function stater(l, dir, callback) {
    'use strict';
    var fs = require('fs');
    var statType = l ? 'lstatSync' : 'statSync';
    var path = require('path');
    var arr = fs.readdirSync(path.resolve(dir));
    arr.forEach(function (file) {
        var stat = fs[statType](path.resolve(dir, file));
        callback(file, stat, dir);
    });
}

/**
 * The module
 * @namespace The module
 * @name module
 */
/**
 * The exports object
 * @namespace The exports object
 */
module.exports = {
    /**
     * Performs fs.statSync on each item in a directory.
     * @param {String} dir The directory to process.
     * @param {Function} callback The callback receives three arguments: the name of
     *  the item being stat-ed, the stat object, and the parent directory.
     */
    statDir: function statDir(dir, callback) {
        'use strict';
        stater(false, dir, callback);
    },
    /**
     * Performs fs.lstatSync on each item in a directory.
     * @param {String} dir The directory to process.
     * @param {Function} callback The callback receives three arguments: the name of
     *  the item being stat-ed, the stat object, and the parent directory.
     */
    lstatDir: function lstatDir(dir, callback) {
        'use strict';
        stater(true, dir, callback);
    }
};