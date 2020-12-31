import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveLogReq} from "../request/SaveLogReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {LogService} from "../service/LogService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const logService = new LogService();

    try {
        const log = await logService.getAll();
        res.status(config.code_success_http).json(log);
    } catch (e) {
        logger.error("[ERROR] getAll Log " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["log-message_error_getAll"], e));
    }

};

export let getByObject = async (req: Request, res: Response) => {

    const objectType = req.params.objectType;
    const objectId = parseInt(req.params.objectId, 10);

    const logService = new LogService();

    try {
        const log = await logService.getByObject(objectType, objectId);
        res.status(config.code_success_http).json(log);
    } catch (e) {
        logger.error("[ERROR] getByObject Log " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["log-message_error_getByObject"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {subject, object_type, object_id, when, content } = req.body;
    const id = parseInt(req.params.id, 10);

    const logService = new LogService();

    try {
        const saveLogReq = new SaveLogReq(subject, object_type, object_id, when, content);
        saveLogReq.id = id;
        const log = await logService.saveOrUpdate(saveLogReq);
        res.status(config.code_success_http).json(log);
    } catch (e) {
        logger.error("[ERROR] save Log " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["log-message_error_save"], e));
    }

};
