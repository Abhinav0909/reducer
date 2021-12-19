const url = require("../model/shortenUrl");
const analytics = require("../model/redirectModel");
exports.createShortenUrl = async (req, res) => {
  console.log(req.body);
  const { destination } = req.body;
  const newUrl = await url.create({
    destination,
  });
  console.log(newUrl);
  return res.send(newUrl);
};
exports.redirectHandler = async (req, res) => {
  const { shortId } = req.params;
  console.log("shortId",shortId);
  //When documents are queried, they are returned as Mongoose Documents by default. With the Mongoose lean() method, the documents are returned as plain objects.
  const shortData = await url.findOne({ shortId }).lean();
  console.log("shortData",shortData);
  if (!shortData) {
    return res.sendStatus(404);
  }
  analytics.create({
    url: shortData.shortId,
  });
  console.log("analytics",analytics)
  console.log("redirect",shortData.destination)
  return res.redirect(shortData.destination);
};
