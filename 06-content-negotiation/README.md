
An important part of HTTP servers is content negotiation.
Perhaps the most important is `Accept-Encoding` and `Content-Encoding`,
which negotiates whether to compress content.
This is the only `Accept` header supported by most CDNs.

In Koa, `this.request.acceptsEncodings()` does all this content negotiation for you.
Remember, if you compress your body, you should set the `Content-Encoding` header.

## Exercise

Using `this.request.acceptsEncodings()`,
either send `hello world` gzipped or not gzipped (identity).
