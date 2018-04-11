'use strict';
/* eslint-disable no-console */
const mongoose = require('mongoose');
const DB_PORT = process.env.DB_PORT || 27017;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'testgiverDB';

function getUrl () {
  if (!DB_HOST) {
    throw new Error('Need to specify host address.');
  }
  if (!DB_NAME) {
    throw new Error('Need to specify database name.');
  }
  return `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

function startConnectionEvents () {
  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection`);
  });

  // If the connection throws an error
  mongoose.connection.on('error', err => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      throw new Error('Mongoose default connection disconnected through app termination.');
    });
  });
}

function connect () {
  const url = getUrl();
  mongoose.Promise = global.Promise;
  mongoose.connect(url, err => {
    if (err) {
      throw new Error('Unable to connect to Mongo.');
    }
    console.log(`Mongoose default connection open to ${url}`);
    startConnectionEvents();
  });
}

module.exports = { connect, getUrl };
