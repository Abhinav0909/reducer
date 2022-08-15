const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const shortenUrl = customAlphabet("abcdefghijklmnopqrstuv", 6);
const schema = mongoose.Schema;
const shortenSchema = schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => shortenUrl(),
  },
  destination: {
    type: String,
    required: true,
  },
});
const url = mongoose.model("shortens", shortenSchema);
module.exports = url;
