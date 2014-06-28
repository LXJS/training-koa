
var koa = require('koa');
var jade = require('jade');
var path = require('path');

var app = module.exports = koa();

app.use(function* () {
  var filename = path.join(__dirname, 'homepage.jade');

  // you may also want to refactor this
  // so that you do `yield render(filename)`.
  this.response.body = yield function (done) {
    jade.renderFile(filename, {
      filename: filename
    }, done);
  };
});
