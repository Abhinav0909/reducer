const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const shortenRouter = require("./shortner/router");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Couldn't connect to db");
    else console.log("Db connected Successfully");
  }
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", shortenRouter);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
