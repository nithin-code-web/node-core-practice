const userRoutes = require('express').Router();

const userController = require('../controller/user.controller');

userRoutes.post('/register', userController.registerUser);
module.exports = userRoutes;