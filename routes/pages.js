const pagesRouter = require("express").Router();
const { sendDashboard } = require("../controllers/auth.js");
const { sendIndex } = require("../controllers/auth.js");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js");
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkAuth, checkCookiesJWT, sendDashboard);

module.exports = pagesRouter;