
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   this.response.body = yield gzip('something');
 */
var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* () {
  if (this.request.acceptsEncodings('gzip') === 'gzip') {
    this.response.body = yield gzip('hello world');
    this.response.set('Content-Encoding', 'gzip');
  } else {
    this.response.body = 'hello world';
    this.response.set('Content-Encoding', 'identity');
  }
});
