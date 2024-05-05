const usersRouter = require('express').Router();

const { sendAllUsers, sendUserById, sendCreatedUser, sendUpdatedUser, } = require('../controllers/users');
const { findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail, } = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post('/users', checkEmptyNameAndEmail, createUser, sendCreatedUser);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, sendUpdatedUser, updateUser);

module.exports = usersRouter;