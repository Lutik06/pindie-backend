const usersRouter = require('express').Router();

const { sendAllUsers, sendUserById, sendCreatedUser } = require('../controllers/users');
const { findAllUsers, findUserById, createUser } = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.get('/users/:id', findUserById, sendUserById);

usersRouter.post('/users', createUser, sendCreatedUser);

module.exports = usersRouter;