# Rave Starter


## Install it

If you don't already have node and bower installed, install them first:

- [node](http://nodejs.org/) (node installs npm)
- [bower](http://bower.io/)

Clone the rave-start repo and install it:

```
git clone git@github.com:RaveJS/rave-start.git myApp
cd myApp
bower install
```


## Run it

Install, then start the built-in web server.

```
npm install
npm start
```

Then point your favorite web browser at http://127.0.0.1:8000/ and open
the browser console.  See below if port 8000 is unavailable on your machine.

You can, of course, use a different web server.  Due to browser security
precautions, however, you cannot load projects directly off the file system.
To uninstall serv, type `npm uninstall --save-dev serv`.


## Develop it

This Starter doesn't prescribe an architectural or organizational structure
for you.  It's a clean slate.  Start with app/main.js.  This is the place where
you can initialize your composition plans, bind your views, etc.  If you
prefer to author your application's modules using AMD format, change the
"moduleType" entry in bower.json to `[ "amd" ]`, rather than `[ "node" ]`.

The `app/` directory is where you place your application's modules.  They will
be available under the "app" package, so you can import them via
`require('app/<module name>');`.  If you would like a different name for your
application package, edit the `name` property inside the bower.json and
package.json files at the root of the project and rename the `app/` directory
to match.

Install your favorite framework or find some useful
[Rave Extensions](http://bower.io/search/?q=rave-extension) to install.
Don't forget to use `--save` when you `bower install --save <extension>`!


## Learn more

Learn about rave at [RaveJS/rave](https://github.com/RaveJS/rave).


## Using this starter without bower

It's possible to use this Rave Starter without bower.  Bower has tons of
front-end components that are not available on npm.  Still, it's possible to
build an entire web client application with npm, which also has many
front-end libraries.  To use the npm-only version of this starter, simply
use the npm-only branch:

```
git clone git@github.com:RaveJS/rave-start.git myApp
cd myApp
git checkout npm-only
npm install
npm start
```


## Using the built-in server with another port

The included web server, [serv](https://github.com/scothis/serv) is set to port
8000 by default.  You can change it to 1337, for instance, with the following
steps:

1. Open "package.json".
1. Find the section "scripts".
1. Change the "start" item to use port 1337.
	1. It should look like this: `"start": "serv --port 1337"`.

[serv](https://github.com/scothis/serv) has other options, as well.
