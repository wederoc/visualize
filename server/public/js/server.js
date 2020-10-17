"use strict";

const express = require("express");
const path = require("path");

const app = express();
const PORT = 5502;

app.use(express.static(__dirname + '/public'));

app.get("/", (request, result) => {
  result.sendFile(path.join(__dirname, "views/html/sample.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
