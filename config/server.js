'use strict';
/* eslint-disable no-console */

const express = require('express');
const app = express();
const router = express.Router();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const routeBuilder = require('./route-builder');

function enableCorsConfiguration () {
  const corsOptions = {
    origin: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
  };

  app.use(cors(corsOptions));
}

function startBasicConfigurations () {
  enableCorsConfiguration();
  //app.use('/uploads', express.static(`${__dirname}./../../uploads`));
  routeBuilder.routes(app);
  app.use('/', router);
}

function start (done) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  startBasicConfigurations();

  app.listen(SERVER_PORT, err => {
    if (err) {
      console.log(`Can not listen on port ${SERVER_PORT}`);
      return;
    }
    console.log(`Server running on port ${SERVER_PORT}`);
    done();
  });
}

module.exports = { start };
