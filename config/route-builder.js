'use strict';
const studentRoute = require('../models/student-route');

function routes (app) {
  app.use('/student', studentRoute);
}

module.exports = { routes };
