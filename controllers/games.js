const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gamesArray));
};

const sendCreatedGame = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Игра обновлена" }));
};

const sendGameDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

module.exports = {
    sendAllGames,
    sendGameById,
    sendCreatedGame,
    sendGameUpdated,
    sendGameDeleted,
};