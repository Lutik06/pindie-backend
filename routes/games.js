const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
    updateGame,
    findGameById,
    checkIsVoteRequest,
    checkEmptyFields,
    deleteGame,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsGameExists,
} = require('../middlewares/games');
const {
    sendAllGames,
    sendCreatedGame,
    sendGameUpdated,
    sendGameDeleted,
    sendGameById,
} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', checkEmptyFields, findAllGames, createGame, checkIsGameExists, checkIfCategoriesAvaliable, checkAuth, sendCreatedGame);
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
);

gamesRouter.delete('/games/:id', deleteGame, checkAuth, sendGameDeleted);
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter;