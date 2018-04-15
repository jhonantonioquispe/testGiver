'use strict';
const express = require('express');
const ModelFactory = require('./model-factory');
const ConstroleFactory = require('./controller-factory');
const router = express.Router();

class RouterApiFactory {
  constructor(name, schema) {
    const model = new ModelFactory(name, schema);
    const controller = new ConstroleFactory(model);
    this.router = express.Router();
    this.router.get('/', controller.getAllRoute);
    this.router.get('/:id', controller.getRoute);
    this.router.post('/', controller.addRoute);
    this.router.patch('/', controller.updateRoute);
  }
}

module.exports = RouterApiFactory;