'use strict';
/* eslint-disable no-console */

const express = require('express');
const app = express();
const router = express.Router();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const routeBuilder = require('./route-builder');
const attachmentBuilder = require('./../file-router/file-router');

function enableCorsConfiguration () {
  const corsOptions = {
    origin: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept','Access-Control-Allow-Methods']
  };

  app.use(cors(corsOptions));
}

function startBasicConfigurations () {
  enableCorsConfiguration();
  console.log(`direction: ${__dirname}\\..\\attachments`)
  app.use('/attachments', express.static(`${__dirname}\\..\\attachments`));
  routeBuilder.routes(app);
  app.use('/', router);
}

function start (done) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  startBasicConfigurations();
  attachmentBuilder(app);

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
