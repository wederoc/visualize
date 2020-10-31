"use strict";

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  // defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "../log/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "../log/combined.log" }),
  ],
});
if (process.env.NODE_ENV !== "production" ) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = {
  init: function (grouping) {
    return {
      debug: function (message) {
        logger.log({
          level: "debug",
          message: `[${grouping}] ${message}`,
        });
      },

      info: function (message) {
        logger.log({
          level: "info",
          message: `[${grouping}] ${message}`,
        });
      },

      warn: function (message) {
        logger.log({
          level: "warn",
          message: `[${grouping}] ${message}`,
        });
      },

      error: function (message) {
        logger.log({
          level: "error",
          message: `[${grouping}] ${message}`,
        });
      },
    }
  }
}
