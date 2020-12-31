import { Request, Response } from "express";
import config from "../config/config.json";
import { SaveStatusReq } from "../request/SaveStatusReq";
import { ErrorResponse } from "../response/ErrorResponse";
import { StatusService } from "../service/StatusService";
import * as logger from "../utils/write_log";

export let getAll = async (req: Request, res: Response) => {

    const statusService = new StatusService();

    try {
        const status = await statusService.getAll();
        res.status(config.code_success_http).json(status);
    } catch (e) {
        logger.error("[ERROR] getAll Status " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["status-message_error_getAll"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, value, type, orderNo } = req.body;
    const id = parseInt(req.params.id, 10);

    const statusService = new StatusService();

    try {
        const saveStatusReq = new SaveStatusReq(name, value, type, orderNo);
        saveStatusReq.id = id;
        const status = await statusService.saveOrUpdate(saveStatusReq);
        res.status(config.code_success_http).json(status);
    } catch (e) {
        logger.error("[ERROR] save Status " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["status-message_error_save"], e));
    }

};

export let deleteStatus = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const statusService = new StatusService();

    try {
        await statusService.delete(id);
        res.status(config.code_success_http).json({ message: config["success_message"] });

    } catch (e) {
        logger.error("[ERROR] delete Status " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["status-message_error_delete"], e));
    }

};
