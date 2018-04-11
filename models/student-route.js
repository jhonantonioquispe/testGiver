'use strict';
const express = require('express');
const Student = require('./student-controller');
const router = express.Router();
//const userAjvSchema = require('../../json-schema/user-schema.js');
//const validatorSchema = require('../../middleware/schema-validator.js');

// router.get('/', Users.getUsers);

// router.get('/:userId', Users.getUserById);

// router.post('/login', Users.login);

router.post('/', Student.createStudent);

module.exports = router;
