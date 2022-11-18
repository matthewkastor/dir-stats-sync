
/* vsdoc for module.exports */

(function (window) {
    window.module = window.module || {};

    window.module.exports = {
        /// <summary>The exports object.</summary>
        /// <returns type="module.exports"/>
                
        statDir: function(dir, callback) {
            /// <summary>Runs fs.statSync on each item in the directory.</summary>
            /// <param name="dir" type="String">Path to the directory to process.</param>
            /// <param name="callback" type="Function">The callback will be given three arguments: the
            ///  name of the file being stat-ed, the stat object, and the parent directory.</param>
        }, 
        
        lstatDir: function(dir, callback) {
            /// <summary>Runs fs.lstatSync on each item in the directory.</summary>
            /// <param name="dir" type="String">Path to the directory to process.</param>
            /// <param name="callback" type="Function">The callback will be given three arguments: the
            ///  name of the file being stat-ed, the stat object, and the parent directory.</param>
        }
        
    };

    var $x = window.module.exports;
    $x.__namespace = "true";
    $x.__typeName = "module.exports";
})(this);
