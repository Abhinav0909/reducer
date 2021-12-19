const mongoose = require("mongoose");
const schema = mongoose.Schema;
const analyticsSchema = schema(
  {
    shortId: {
      type:String,
      ref: "shortId",
      required: false,
    },
  },
  { timestamps: true }
);
const analytics = mongoose.model("analytic", analyticsSchema);
module.exports = analytics;
