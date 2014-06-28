
var koa = require('koa');

var app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    this.response.body = 'internal server error';
    this.response.status = 500;
    app.emit('error', err, this);
  }
});

app.use(function* () {
  throw new Error('boom!');
});
