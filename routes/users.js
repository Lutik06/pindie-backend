const usersRouter = require('express').Router();

const { sendAllUsers, sendUserById, sendCreatedUser, sendUpdatedUser, sendUserDeleted, } = require('../controllers/users');
const { findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, } = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post('/users', checkEmptyNameAndEmail, createUser, sendCreatedUser);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, sendUpdatedUser, updateUser);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;