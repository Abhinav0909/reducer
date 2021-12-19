const express = require("express");
const shortenRouter = express();
shortenRouter.get("/", async (req, res) => {
  res.send("Router 1");
});
shortenRouter.post("/shorten", async (req, res) => {
    
});
module.exports = shortenRouter;
