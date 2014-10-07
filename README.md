THIS WORKSHOP HAS MOVED TO https://github.com/koajs/workshop

# koa
[![Gitter](https://badges-beta.gitter.im/Join Chat.svg)](https://beta.gitter.im/LXJS/training-koa?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

This workshop assumes you've had experience with:

- node.js
- Express, Restify, or any similar node.js frameworks
- Asynchronous programming - callbacks or promises

## Instructions

Install node 0.11.13+. Using `nvm`, you can install it like this:

```bash
nvm install 0.11.13
nvm use 0.11.13
```

You can also install it directly from http://nodejs.org.
Or using various other node version managers such as [n](https://github.com/visionmedia/n).
If you're having trouble with this, just install it directly from nodejs.org.

Then you must install this workshop.
You can either fork this workshop (recommended) or clone it:

```bash
git clone git://github.com/lxjs/training-koa
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

If you get an error message like `SyntaxError: Unexpected token *`,
this means you didn't run the the process with `--harmony-generators`.

## Learning more than just Koa

Although writing tests is not part of this workshop,
you should still learn how they work.
An important part of creating apps is creating the tests for it.
Inspect the `test.js` files and see how [supertest](https://github.com/visionmedia/supertest)
and [mocha](https://github.com/visionmedia/mocha) are used,
both of which are used in Koa, Express, and many other of TJ's work.
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

## 28 jun - 14:30h Participants

- Joaquim Serafim - [joaquimserafim](https://github.com/joaquimserafim)
- André Cruz - [satazor](https://github.com/satazor)
- Daniel da Silva - [danielfdsilva](https://github.com/danielfdsilva)
- Ricardo Malta - [ricmalta](https://github.com/ricmalta)
- Miguel Serrano - [miguelvps](https://github.com/miguelvps)
- Paulo Vieira - [paulovieira](https://github.com/paulovieira)
- George Shank - [taterbase](https://github.com/taterbase)
- Dominykas Blyžė - [dymonaz](https://github.com/dymonaz)
- Jean Carlos Meninno - [eth0lo](https://github.com/eth0lo)
- Luis Confraria - [luisbug](https://github.com/luisbug)
- Marco Pantaleo - [peeofive](https://github.com/peeofive)
- Nuno Costa - [naflcosta](https://github.com/naflcosta)
- Miguel Pereira - [miguelampereira](https://github.com/miguelampereira)
- Ricardo Soares - [rsoares](https://github.com/rsoares)
- Gábor Balázs - [balazsgabor](https://github.com/balazsgabor)
- Daniel Wellman - [danwellman](https://github.com/danwellman)
- Matthias Knoll - [kohlikohl](https://github.com/kohlikohl)
- Jorge Dias - [diasjorge](https://github.com/diasjorge)
- Alejandro Dev - [ainformatico](https://github.com/ainformatico)
- Ricardo Quintas - [rdquintas](https://github.com/rdquintas)
- Matteo Collina - [mcollina](https://github.com/mcollina)
- Tom Ashworth - [phuu](https://github.com/phuu)
- Mike Brevoort - [mbrevoort](https://github.com/mbrevoort)
- Tracy Hinds - [hackygolucky](https://github.com/hackygolucky)
- Charlie Robbins - [indexzero](https://github.com/indexzero)
- Jonathan Lipps - [jlipps](https://github.com/jlipps)
- Luís Ferreira - [zamith](https://github.com/zamith)
- Marcelo Conceição - [marcelombc](https://github.com/marcelombc)
- Bruno Azevedo - [azevedo-252](https://github.com/azevedo-252)
- Andrew Newdigate - [suprememoocow](https://github.com/suprememoocow)
- Espen Hovlandsdal  - [rexxars](https://github.com/rexxars)
- Kristoffer Brabrand - [kbrabrand](https://github.com/kbrabrand)
- Andre Duarte - [onemanclapping](https://github.com/onemanclapping)
- Patrick Marques - [pmarques](https://github.com/pmarques)
- Thiago Dantas - [tdantas](https://github.com/tdantas)

## 27 jun - 17:30h Participants

- David Cruz - [dcruz](https://github.com/dcruz)
- Luis Naia - [darkbls](https://github.com/darkbls)
- André Santos - [andrefs](https://github.com/andrefs)
- João Jerónimo - [joaojeronimo](https://github.com/joaojeronimo)
- Frederic Hemberger - [fhemberger](https://github.com/fhemberger)
- Abel Soares - [abelsoares](https://github.com/abelsoares)
- Mario Nzualo - [marionzualo](https://github.com/marionzualo)
- Oliver Zeigermann - [DJCordhose](https://github.com/DJCordhose)
- Franz Enzenhofer - [franzenzenhofer](https://github.com/franzenzenhofer)
- Tom Cartwright - [tomcartwrightuk](https://github.com/tomcartwrightuk)
- Sebastian Golasch - [asciidisco](https://github.com/asciidisco)
- João Reis - [joao-reis](https://github.com/joao-reis)
- J Oates - [joates](https://github.com/joates)
- Rui Patinha - [rfp](https://github.com/rfp)
- Pedro Melo Pereira - [pmelopereira](https://github.com/pmelopereira)
- Marco Ferreira - [xpt0](https://github.com/xpt0)
- Hugo Rodrigues - [hugominas](https://github.com/hugominas)
- André Neves - [andrefgneves](https://github.com/andrefgneves)
- Hugo Mota - [hugomota](https://github.com/hugomota)
- Nelson Fonseca - [nlfonseca](https://github.com/nlfonseca)
- Ricardo Correia - [extravaganza47](https://github.com/extravaganza47)
- Tiago Duque - [bikerpower](https://github.com/bikerpower)
- Jorge Monteiro - [jorgemonteiro](https://github.com/jorgemonteiro)
- Bruno Abrantes - [inf0rmer](https://github.com/inf0rmer)
- João Gomes - [jamgomes](https://github.com/jamgomes)
- Gabriel Poça - [gabrielpoca](https://github.com/gabrielpoca)
- Pedro Jorge Santos - [baldasman](https://github.com/baldasman)
- António Capelo - [antoniocapelo](https://github.com/antoniocapelo)
- João Ribeiro - [JoaoCasalNovo](https://github.com/JoaoCasalNovo)
- Rui Carneiro - [sgtcarneiro](https://github.com/sgtcarneiro)
- Marta Maio - [martarsm](https://github.com/martarsm)
- João Fernandes - [joaoflf](https://github.com/joaoflf)
- Tiago Morais - [tnbmorais](https://github.com/tnbmorais)
- Juliana Pereira - [jvpereira](https://github.com/jvpereira)
- Nathan Sobo - [nathansobo](https://github.com/nathansobo)
- David Oliveira - [davidfoliveira](https://github.com/davidfoliveira)
- Sugendran Ganess - [sugendran](https://github.com/sugendran)
- Catarina Moura - [catarinamoura](https://github.com/catarinamoura)
- Yacine Rezgui - [yrezgui](https://github.com/yrezgui)
