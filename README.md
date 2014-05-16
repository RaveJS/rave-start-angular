# Rave Starter


## Install it

If you don't already have node and bower installed, install them first:

- [node](http://nodejs.org/) (node installs npm)
- [bower](http://bower.io/)

Clone the rave-start-angular repo and install it:

```
git clone git@github.com:RaveJS/rave-start-angular.git myApp
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

This Starter doesn't prescribes a very minimal application structure
for you.  It's almost a clean slate.  Start with main.js.  This is where
you can initialize your routes, directives, services, etc.  If you
prefer to author your application's modules using AMD format, change the
"moduleType" entry in bower.json to `[ "amd" ]`, rather than `[ "node" ]`.

Install your favorite third-party packages or find some useful
[Rave Extensions](http://bower.io/search/?q=rave-extension) to install.
Don't forget to use `--save` when you `bower install --save <extension>`!


## Learn more

Learn about rave at [RaveJS/rave](https://github.com/RaveJS/rave).


## Using the built-in server with another port

The included web server, [serv](https://github.com/scothis/serv) is set to port
8000 by default.  You can change it to 1337, for instance, with the following
steps:

1. Open "package.json".
1. Find the section "scripts".
1. Change the "start" item to use port 1337.
	1. It should look like this: `"start": "serv --port 1337"`.

[serv](https://github.com/scothis/serv) has other options, as well.
