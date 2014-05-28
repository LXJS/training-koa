
Both a request and a response could have content headers.
These are:

- `Content-Type`
- `Content-Length`
- `Content-Encoding`

Among many others. We're particularly interested in `type` and `length`.
Koa has getters/setters for `type` and `length`:

- `this.request.type`
- `this.request.length`
- `this.response.type`
- `this.response.length`

Inferring `this.request.type` is a little difficult.
For example, how do you know if the request is text?
You don't want to use a regular expression or try all the possible mime types.
Thus, Koa has `this.request.is()` for you:

```js
this.request.is('image/*') // => image/png
this.request.is('text') // => text or false
```

## Exercise

Create an app that checks the `Content-Type` of the request.
If it's `application/json`, simply return the body with appropriate content headers.
Otherwise, return `ok`.

> Hint: the original node `req` and `res` objects are `this.req` and `this.res`, respectively.
