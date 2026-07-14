const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const videoRoutes = require("./routes/videoRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/videos", videoRoutes);
app.use("/bookmarks", bookmarkRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
