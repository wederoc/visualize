"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../configuration/logger");
const logger = logger_1.init("Client App Server");
const app = express_1.default();
const port = 5501; // default port to listen
// app.use(express.static(__dirname + '/public'));
app.use(express_1.default.static(__dirname + '/'));
app.use('/css', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/js')));
app.use('/js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/jquery/dist')));
app.use('/js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/@popperjs/core/dist/umd')));
app.get("/", (request, result) => {
    result.sendFile(path_1.default.join(__dirname, "index.html"));
});
app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
//# sourceMappingURL=app.js.map