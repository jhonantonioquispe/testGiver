'use strict';
const ApiRouterFactory = require('../model-builder/api-route-factory');
const schemasFolder = './schemas/';
const fs = require('fs');

function routes(app) {
  fs.readdirSync(schemasFolder).forEach(fileName => {
    let requiredSchema = require(`.${schemasFolder}${fileName}`);
    let routeName = fileName.replace('.js','');
    let newRoute = new ApiRouterFactory(routeName, requiredSchema);
    console.log('fileName-> ',fileName, routeName);
    app.use(`/${routeName}`, newRoute.router);
  })
}

module.exports = { routes };
