const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

router.post("/", async (req, res) => {
  const bookmark = new Bookmark(req.body);
  await bookmark.save();
  res.json(bookmark);
});

router.get("/:videoId", async (req, res) => {
  const bookmarks = await Bookmark.find({
    videoId: req.params.videoId
  });

  res.json(bookmarks);
});

router.delete("/:id", async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id);
  res.json({
    message: "Bookmark Deleted"
  });
});

module.exports = router;
