const userRoutes = require('express').Router();

const userController = require('../controller/user.controller');

userRoutes.post('/register', userController.registerUser);

userRoutes.get('/getUsers', userController.getUser);

userRoutes.post('/login', userController.loginUser);

userRoutes.delete('/:id', userController.deleteUser);

userRoutes.delete('/', userController.dropUsers);

userRoutes.put('/:id',userController.updateUser);

module.exports = userRoutes;