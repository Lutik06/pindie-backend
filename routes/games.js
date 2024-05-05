const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
    updateGame,
    findGameById,
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

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', checkEmptyFields, findAllGames, createGame, checkIsGameExists, checkIfCategoriesAvaliable, sendCreatedGame);
gamesRouter.put('/games/:id', checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkEmptyFields, updateGame, sendGameUpdated, findGameById, checkIsGameExists);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;