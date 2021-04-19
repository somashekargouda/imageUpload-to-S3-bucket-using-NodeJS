const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const http = require("http");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const ImageRoute = require("./routes/demo.route");

mongoose
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => console.log("Connected to DB"),
    (error) => console.log(error)
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/imageupload", ImageRoute);

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT ${port}`);
});

app.use((req, res) => {
  res.status(404).json({
    error: {
      message: "Not found",
    },
  });
});

module.exports = app;
