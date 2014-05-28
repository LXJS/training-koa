
In Koa, error handling is done using `try/catch` (except with event emitters).
Unlike, Express, error handlers simply decorators that you add to the __top__ of your middleware stack.

```js
app.use(function* (next) {
  try {
    yield next;
  } catch (err) {
    // do something with the error
  }
})

app.use(function* () {
  throw new Error('boom!');
})
```

Koa also emits all errors uncaught by any middleware to `app.on('error', function (err, context) {})`.
This is useful for logging.
However, if you create your own error handler,
you will have to manually emit these events yourself.
The nice thing about this is that you can now decide which errors are important enough to delegate to `app`.

## Exercise

Create an error handler that returns `internal server error` and emits the error on `app`.
