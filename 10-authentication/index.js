
var fs = require('fs');
var koa = require('koa');
var csrf = require('csrf');
var path = require('path');
var parse = require('co-body');
var session = require('koa-session');

var app = module.exports = koa();

var form = fs.readFileSync(path.join(__dirname, 'form.html'), 'utf8');

csrf(app);

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

  if (!this.session.authenticated) this.throw(401, 'user not authenticated');

  this.response.body = 'hello world';
})

/**
 * If successful, the logged in user should be redirected to `/`.
 */

app.use(function* login() {
  if (this.request.path !== '/login') return yield* next;
  if (this.request.method === 'GET') return this.response.body = form.replace('{{csrf}}', this.csrf);
})

/**
 * Let's 303 redirect to `/login` after every response.
 * If a user hits `/logout` when they're already logged out,
 * let's not consider that an error and rather a "success".
 */

app.use(function* logout() {
  if (this.request.path !== '/logout') return yield* next;
})

/**
 * Serve this page for browser testing if not used by another module.
 */

if (!module.parent) app.listen(process.env.PORT || 3000);
