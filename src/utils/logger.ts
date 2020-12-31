import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({ filename: "bts_portal.log", level: "info"}),
        new (winston.transports.File)({ filename: "bts_portal_error.log", level: "error"})
    ]
});

export default logger;
