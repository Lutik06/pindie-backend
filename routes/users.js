const usersRouter = require('express').Router();
const sendMe = require("../controllers/users.js");

const { sendAllUsers,
    sendUserById,
    sendCreatedUser,
    sendUpdatedUser,
    sendUserDeleted,
} = require('../controllers/users');
const { findAllUsers,
    checkIsUserExists,
    findUserById,
    createUser,
    updateUser,
    checkEmptyNameAndEmail,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    hashPassword
} = require('../middlewares/users');

const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/me", checkAuth, sendMe);

usersRouter.get(
    '/users',
    findAllUsers,
    sendAllUsers
);
usersRouter.get(
    '/users/:id',
    findUserById,
    sendUserById
);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    checkAuth,
    createUser,
    sendCreatedUser
);

usersRouter.put(
    '/users/:id',
    checkEmptyNameAndEmail,
    sendUpdatedUser,
    checkAuth,
    updateUser
);

usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;