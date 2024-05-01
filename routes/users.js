const usersRouter = require('express').Router();

const sendAllUsers = require('../controllers/users');
const findAllUsers = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);

module.exports = usersRouter;