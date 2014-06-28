
var koa = require('koa');

var app = module.exports = koa();

app.use(function* () {
  if (this.request.is('json')) {
    this.response.body = {
      message: 'hi!'
    };
  } else {
    this.response.body = 'ok';
  }
})
