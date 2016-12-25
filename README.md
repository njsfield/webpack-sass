## Webpack & Sass

Webpack can be used to bundle your JavaScript (and other file types too) with dependencies into static assets. Essentially it gives you the power to write server side code with **require/module.exports** for the client side. Some benefits include;
- No need for multiple script tags (in particular order)
- No worrying about poluting global window object with variables
- Power to transpile ES6 syntax for the client, and minify etc

Your can use *loaders* to convert sass into css, which in turn is outputted to JavaScript (with DOM manipulation to apply styles), meaning rather than serving up huge css files your can apply css on a component level.

If you need to bundle css (e.g. from sass) it's still possible...

This project demonstrates how to bundle process javascript and sass, with automatic recompiling thanks to webpack's **--watch** method, and **nodemon** to stop and start the server.

To install, clone the repo, then run 
```
npm install
```

Install nodemon and webpack globally for command line use;
```
npm install nodemon webpack -g
```

To start, run the following
```
npm run dev
```
The server will be running, so you can navigate to the given uri ('/' for home) to see the output. You can then alter sass files in the *src/css* directory and javascript in *src/js*, which will get bundled into the public directory.





