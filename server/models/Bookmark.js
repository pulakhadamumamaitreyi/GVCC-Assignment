const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  videoId: String,
  bookmarkName: String,
  timestamp: Number
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);
