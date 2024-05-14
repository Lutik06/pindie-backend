const pagesRouter = require("express").Router();
const { sendDashboard } = require("../controllers/auth.js");
const { sendIndex } = require("../controllers/auth.js");

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", sendDashboard);

module.exports = pagesRouter;