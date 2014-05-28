
var koa = require('koa');
// this is a promisified version of zlib's gzip function
// allowing you to simply `yield` it.
var gzip = require('mz/zlib').gzip;
// this.response.body = yield gzip('some thing')

var app = module.exports = koa();

app.use(function* () {

})
