const express = require("express");
const shortenRouter = express();
const {createShortenUrl,redirectHandler,getShortUrlHandler} = require("../controller/shortUrlController")
shortenRouter.get("/", async (req, res) => {
  res.send("Router 1");
});
shortenRouter.post("/shorten",createShortenUrl);
shortenRouter.get("/:shortId",redirectHandler);
shortenRouter.get("/shorten/:shortid",getShortUrlHandler);
module.exports = shortenRouter;
