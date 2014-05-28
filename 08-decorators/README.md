
In Koa,
all middleware are essentially decorators for all following middleware:

```js
app.use(function* decorator(function (subapp) {
  // do something before subapp executes
  yield* subapp
  // do something after subapp executes
}))

app.use(function* subapp(next) {
  this.response.body = 'hello world'
})
```

For more information on decorators, look up "decorator functions" or the "decorator pattern".

## Exercise

Create a middleware that escapes all the HTML entities in the response.
