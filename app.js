const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

const app = express();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    gamesRouter,
    categoriesRouter,
    usersRouter
)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
