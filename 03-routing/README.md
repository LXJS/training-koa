
Routing in Koa can be done very easily with `this.request.path` and `yield next`.
To check if the request matches a specific path:

```js
if (this.request.path === '/') {

}
```

To skip this middleware:

```js
if (skip) return yield next;
```

This is very similar to Express' `next()` call.

Combining this together,
you can route paths like this:

```js
if (this.request.path !== '/') return yield next;

this.body = 'we are at home!';
```

By `return`ing early,
we don't need to bother having any nested `if` and `else` statements.

## Exercise

Create an app that returns the following responses from the following routes:

- `/` - `hello world`
- `/404` - `page not found`
- `/500` - `internal server error`.

Each route should be its own middleware.

## Learn More

There are more properties you're probably interested in when routing:

- `this.request.method`
- `this.request.query`
- `this.request.host`
