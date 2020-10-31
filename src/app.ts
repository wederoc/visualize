import express from "express";
import path from "path";

import { init } from "../configuration/logger";
const logger = init("Client App Server");

const app = express();
const port = 5501; // default port to listen

// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));
app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../../node_modules/jquery/dist')))
app.use('/js', express.static(path.join(__dirname, '../../node_modules/@popperjs/core/dist/umd')))


app.get("/", (request, result) => {
  result.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
