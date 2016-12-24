const Hapi = require('hapi');
const vision = require('vision');
const inert = require('inert');
const server = new Hapi.Server();
const log = console.log;

// Connect
server.connection({
  port: process.env.PORT || 8080,
  routes: {
    files: {
      relativeTo: __dirname
    }
  }
});

// Register Plugins
server.register([vision, inert], (err) => {
  if (err) { throw err; }

    // Register views
  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views',
    layoutPath: 'views/layout/',
    layout: 'default'
  });

  // Add home route
  const home = {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      reply.view('home');
    }
  }

  // Serve static files
  const file = {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  };

  // Use routes
  server.route([home, file]);
});

// Start
server.start((err) => {
  err ? log(err) : log(`Server is running at ${server.info.uri}`);
});
