const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
    updateGame,
    findGameById,
    checkEmptyFields,
    deleteGame,
} = require('../middlewares/games');
const {
    sendAllGames,
    sendCreatedGame,
    sendUpdatedGame,
    sendGameDeleted,
} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', checkEmptyFields, createGame, sendCreatedGame);
gamesRouter.put('/games/:id', checkEmptyFields, updateGame, sendUpdatedGame, findGameById);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;