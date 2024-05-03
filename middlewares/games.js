const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    console.log("GET /games");
    req.gamesArray = await games.find({}).populate("categories").populate({
        path: "users",
        select: "-password",
    });
    next();
};

const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
        console.log(req.body);
        req.game = await games.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
};

module.exports = {
    findAllGames,
    createGame,
};