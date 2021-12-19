const express = require("express");
const shortenRouter = express();
const {createShortenUrl,redirectHandler} = require("../controller/shortUrlController")
shortenRouter.get("/", async (req, res) => {
  res.send("Router 1");
});
shortenRouter.post("/shorten",createShortenUrl);
shortenRouter.get("/:shortId",redirectHandler);
module.exports = shortenRouter;
