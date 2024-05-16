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
} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', checkEmptyFields, findAllGames, createGame, checkIsGameExists, checkIfCategoriesAvaliable, checkAuth, sendCreatedGame);
gamesRouter.put('/games/:id', checkIfCategoriesAvaliable, checkIsVoteRequest, checkAuth, checkIfUsersAreSafe, checkEmptyFields, updateGame, sendGameUpdated, findGameById, checkIsGameExists);
gamesRouter.delete('/games/:id', deleteGame, checkAuth, sendGameDeleted);

module.exports = gamesRouter;