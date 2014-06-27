
var fs = require('fs');

/**
 * Create a yieldable version of `fs.stat()`:
 *
 *   var stats = yield fs.stat(__filename);
 *
 * Hint: you can return a yieldable.
 */

exports.stat = function (filename) {

};

/**
 * Create a yieldable version of `fs.exists()`:
 *
 *   var exists = yield fs.exists(__filename);
 *
 * Note that `fs.exists()` simply wraps `fs.stat()`.
 * If `fs.stat()` does not return an error, then the file exists!
 *
 * Hint: don't use fs.exists() as it's not a proper callback.
 */

exports.exists = function (filename) {

};
