# koa

In this workshop, you will learn the basics of [koa](https://github.com/koajs/koa), [Express'](https://github.com/visionmedia/express) spiritual successor.

## Trainers

* [Jonathan Ong](https://github.com/jonathanong) - [@jongleberry](https://twitter.com/jongleberry)

## Preparations for this training

In order to prepare to this training you should/must do the following List of readings and exercises. If you have questions, please open an issue and we will be glad to answer, you might be helping other participants too.

- [co](https://github.com/visionmedia/co) - the control flow engine used by koa
- [koajs](http://koajs.com) - the official web page for koa
- [koa examples](https://github.com/koajs/examples) - a lot of examples for koa
- http://www.jongleberry.com - some blog posts on koa
- https://medium.com/code-adventures/1776085cb4af and various other blog posts about koa on medium

You should also view this presentation: http://cdn.rawgit.com/jonathanong/koajs/master/index.html.

## Instructions

Install node 0.11.13+. Using `nvm`, you can install it like this:

```bash
nvm install 0.11.13
nvm use 0.11.13
```

You can also install it directly from http://nodejs.org.

Then you must install this workshop.
You can either fork this workshop (recommended) or clone it:

```bash
git clone git://github.com/koajs/workshop
cd workshop
```

Then install all the dependencies:

```bash
npm install
npm install -g mocha
```

Go through each training, which are stored in folders, in numerical older.
Read the `README` file, edit the `index.js` files, then run each test by executing the following:

```bash
mocha --harmony-generators test.js
```

## Learning more than just Koa

Although writing tests is not part of this workshop,
you should still learn how they work.
An important part of creating apps is creating the tests for it.
Inspect the `test.js` files and see how [supertest](https://github.com/visionmedia/supertest)
and [mocha](https://github.com/visionmedia/mocha) are used.
You will also see what is expected from your sample apps by reading the tests.

After you finish each training,
you may want to `git commit` so you have a history of what you've done:

```bash
git commit -a -m "i finished training 1!"
```

Many small commits is good practice!

## Workshop

The first 20-30 minutes of the workshop will be a presentation on http://cdn.rawgit.com/jonathanong/koajs/master/index.html followed by a short period of high level question and answers on Koa.
After which, the hands-on workshop will begin.
Any technical questions asked from the point on will be shown to the entire workshop.

## 27 Jun 17:30h Participants

`TBA`

## 28 Jun 14:30h Participants

`TBA`
