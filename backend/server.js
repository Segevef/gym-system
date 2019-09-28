const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const apiRouter = require("./api-router");
const setupDB = require("./setup-db");
const cors = require("cors");
const app = express();
setupDB();

app.use(cors());
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", apiRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on: ", port);
});
