# Rave Starter


## Install it

If you don't already have npm and bower installed, install them first:

[node](http://nodejs.org/) (node installs npm)
[bower](http://bower.io/)

Clone the rave-start repo and install it:

```
mkdir myApp
cd myApp
git clone git@github.com:RaveJS/rave-start.git .
bower install
```


## Run it

Start up the built-in web server, then point your favorite web browser at
http://127.0.0.1:8000/ and open the browser console.  See below if port
8000 is unavailable on your machine.

```
npm install
npm start
```

You can, of course, use a different web server.  Due to browser security
precautions, however, you cannot load projects directly off the file system.


## Learn more

Learn about rave at [RaveJS/rave](https://github.com/RaveJS/rave).


## Using this starter without bower

It's possible to use this Rave Starter without bower.  Bower has tons of
front-end components that are not available on npm.  Still, it's possible to
build an entire web client application with npm, which also has many
front-end libraries.  To use the npm-only version of this starter, simply
use the npm-only branch:

```
mkdir myApp
cd myApp
git clone git@github.com:RaveJS/rave-start.git .
git checkout npm-only
npm install
npm start
```


## Using the built-in server with another port

The included server, [serv](https://github.com/scothis/serv) is set to port
8000 by default.  You can change it to 1337, for instance, with the following
steps:

1. Open "package.json".
1. Find the section "scripts".
1. Change the "start" item to use port 1337.
	1. It should look like this: `"start": "serv --port 1337"`.

[serv](https://github.com/scothis/serv) has other options, as well.
