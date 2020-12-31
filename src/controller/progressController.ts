import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveProgressReq} from "../request/SaveProgressReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {ProgressService} from "../service/ProgressService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const progressService = new ProgressService();

    try {
        const progress = await progressService.getAll();
        res.status(config.code_success_http).json(progress);
    } catch (e) {
        logger.error("[ERROR] getAll Progress " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progress-message_error_getAll"], e));
    }

};

export let getByProject = async (req: Request, res: Response) => {

    const projectId = parseInt(req.params.projectId, 10);

    const progressService = new ProgressService();

    try {
        const progress = await progressService.getByProject(projectId);
        res.status(config.code_success_http).json(progress);
    } catch (e) {
        logger.error("[ERROR] getByProgress Progress " + e);
        // tslint:disable-next-line:max-line-length
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progress-message_error_getByProjectId"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {title, content, project, by, when } = req.body;
    const id = parseInt(req.params.id, 10);

    const progressService = new ProgressService();

    try {
        const saveProgressReq = new SaveProgressReq(title, content, project, by, when);
        saveProgressReq.id = id;
        const progress = await progressService.saveOrUpdate(saveProgressReq);
        res.status(config.code_success_http).json(progress);
    } catch (e) {
        logger.error("[ERROR] save Progress " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progress-message_error_save"], e));
    }

};

export let deleteProgress = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const progressService = new ProgressService();

    try {
        await progressService.delete(id);
        res.status(config.code_success_http).json({ message: config.success_message });

    } catch (e) {
        logger.error("[ERROR] delete Progress " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["progress-message_error_delete"], e));
    }

};
