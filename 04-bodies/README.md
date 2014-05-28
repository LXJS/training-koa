
So far, we've only used strings as bodies.
Koa supports the following types of bodies:

- Strings
- Buffers
- Streams (node)
- JSON Objects

If the body is not treated as the first three,
Koa will assume that you want to send a JSON response,
treating REST APIs as first-class citizens.

When setting a stream as a body,
Koa will automatically add any error handlers so you don't have to worry about error handling.

## Exercise

Let's create an app that returns a stream when the client requests `/stream` and a JSON body when the client requests `/json`.
