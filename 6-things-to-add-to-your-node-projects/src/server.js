// @flow

import express from 'express';
import bodyParser from 'body-parser';
import Promise from 'bluebird';

async function makeServer(silent: bool = false): Promise<Object> {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // configure routes with node app
  require('./routes.js')(app);

  var server = app.listen(5000, function() {
    if (!silent) {
      console.log('Listening on port %s...', server.address().port);
    }
  });
  return server;
}

module.exports = makeServer;
