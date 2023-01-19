const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

// handle parsing request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  // handle request for static files
  app.use(express.static(path.join(__dirname, "../build")));

// get request for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// catch-all for requests to an unknown route
app.use((req, res) => {
  res.status(404).send("404 Errors");
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred. In global error handler" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
