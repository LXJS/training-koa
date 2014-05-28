
Koa uses [co](https://github.com/visionmedia/co) under the hood,
so to fully understand how Koa works,
you must understand co.

Co uses ES6 generators.
You can tell if a function is a generator if it has a star:

```js
function* () {

}
```

`yield` is a keyword specific to generators and allows users to __arbitrarily suspend__ functions at any `yield` point.
`yield` is not a magical async function - co does all that magic behind the scenes.

This workshop will not cover all the intricacies of generators.

## Yieldables

You can only `yield` a few types of "async" things in Co. We call these "yieldables":

### Thunks

Thunks are asynchronous functions that only allow a callback:

```js
function (done) {
  setImmediate(done)
}
```

If there are additional arguments on this function,
a neat trick is to simply wrap it in a thunk or return a thunk.
You may be interested in [thunkify](https://github.com/visionmedia/node-thunkify).

### Promises

We won't show you how to write code with promises,
but you can `yield` them!

### Generator Functions and Generators

You can `yield` other co generators and generator functions.

### Arrays and Objects

When you `yield` an array of "yieldables",
they will all be run in parallel.

```js
function* () {
  yield [
    function (done) { setImmediate(done) },
    function (done) { setImmediate(done) },
    function (done) { setImmediate(done) },
  ]
}
```

All three functions will be executed in parallel.
You can think of this as an async `[].map()`.

## Creating yieldables

In this exercise, we will learn how to create "yieldables" from callbacks.
We will not go into depth of how generators and `co` works as it is unnecessary for Koa.

## Learning more

- [thunkify](https://github.com/visionmedia/node-thunkify)
- [mz](https://github.com/normalize/mz)
- [co-fs](https://github.com/visionmedia/co-fs)
