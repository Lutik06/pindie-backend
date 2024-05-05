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
} = require('../middlewares/games');
const {
    sendAllGames,
    sendCreatedGame,
    sendGameUpdated,
    sendGameDeleted,
} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', checkEmptyFields, createGame, sendCreatedGame);
gamesRouter.put('/games/:id', checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkEmptyFields, updateGame, sendGameUpdated, findGameById);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;