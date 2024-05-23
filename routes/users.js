const usersRouter = require('express').Router();

const { sendAllUsers,
    sendUserById,
    sendCreatedUser,
    sendUserUpdated,
    sendUserDeleted,
    sendMe,
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
    sendUserUpdated,
    checkAuth,
    updateUser,
);

usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;