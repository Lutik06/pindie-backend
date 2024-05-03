const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
} = require('../middlewares/games');
const {
    sendAllGames,
    sendCreatedGame,
} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post('/games', createGame, sendCreatedGame);

module.exports = gamesRouter;