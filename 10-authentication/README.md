
To create an application, you probably need authentication.
The simplest session module is [koa-session](https://github.com/koajs/session).
There are plenty of other session modules for Koa.
For CSRF protection, we've included [koa-csrf](https://github.com/koajs/csrf).
For body parsing, we've included [co-body](https://github.com/visionmedia/co-body).

## Exercise

Let's create a very simple app with login and logout features.
Be sure to read the documentation on these two modules.

If the user logs in, they should see `hello world` when hitting `/`.
Otherwise, they should see a `401` error because they aren't logged in.

If you'd like to test it out on your computer,
run `PORT=3000 node --harmony-generators index.js` and open `localhost:3000` in your browser.

We're not actually going to create users in this example.
The only acceptable authentication is:

```bash
username = username
password = password
```

Mark the user as authenticated by populating `this.session.authenticated`.
If `this.session.authenticated` exists, then the user is considered logged in.
In real life, you'd want to set `this.session.userid=` or something to specify the user.

For more specifics on how the app should work, consult the tests!
