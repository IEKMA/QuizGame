const express = require("express");
const router = require("express").Router();
const removeHeaders = require("./middleware/removeHeaders");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(removeHeaders);
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index.routes");
app.use("/api", indexRouter);
app.listen(PORT, () => {
  console.log("Вот это прикол");
});
