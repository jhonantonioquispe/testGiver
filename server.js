'use strict';
const server = require('./config/server');
const dataBase = require('./config/database');

server.start(() => {
  dataBase.connect();
});
