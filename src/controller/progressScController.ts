import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveProgressScReq} from "../request/SaveProgressScReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {ProgressScService} from "../service/ProgressScService";
import logger from "../utils/logger";

export let getByProgress = async (req: Request, res: Response) => {

    const progressId = parseInt(req.params.progressId, 10);

    const progressScService = new ProgressScService();

    try {
        const progressSc = await progressScService.getByProgress(progressId);
        res.status(config.code_success_http).json(progressSc);
    } catch (e) {
        logger.error("[ERROR] getByProgress ProgressSc " + e);
        // tslint:disable-next-line:max-line-length
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progressSc-message_error_getByProgress"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {progress, by, when, content, reply_to } = req.body;
    const id = parseInt(req.params.id, 10);

    const progressScService = new ProgressScService();

    try {
        const saveProgressScReq = new SaveProgressScReq(progress, by, when, content, reply_to);
        saveProgressScReq.id = id;
        const progressSc = await progressScService.saveOrUpdate(saveProgressScReq);
        res.status(config.code_success_http).json(progressSc);
    } catch (e) {
        logger.error("[ERROR] save ProgressSc " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progressSc-message_error_save"], e));
    }

};

export let deleteProgressSc = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const progressScService = new ProgressScService();

    try {
        await progressScService.delete(id);
        res.status(config.code_success_http).json({ message: config["success_message"] });

    } catch (e) {
        logger.error("[ERROR] delete ProgressSc " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progressSc-message_error_delete"], e));
    }

};
