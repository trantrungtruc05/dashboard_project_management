import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveTaskCReq} from "../request/SaveTaskCReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {TaskCService} from "../service/TaskCService";
import logger from "../utils/logger";

export let getByTask = async (req: Request, res: Response) => {

    const taskId = parseInt(req.params.taskId, 10);

    const taskCService = new TaskCService();

    try {
        const taskC = await taskCService.getByTask(taskId);
        res.status(config.code_success_http).json(taskC);
    } catch (e) {
        logger.error("[ERROR] getByTask TaskC " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskC-message_error_getByTask"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {task, by, when, content, replyto, attachment } = req.body;
    const id = parseInt(req.params.id, 10);

    const taskCService = new TaskCService();

    try {
        const saveTaskCReq = new SaveTaskCReq(task, by, when, content, replyto, attachment);
        saveTaskCReq.id = id;
        const taskC = await taskCService.saveOrUpdate(saveTaskCReq);
        res.status(config.code_success_http).json(taskC);
    } catch (e) {
        logger.error("[ERROR] save TaskC " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskC-message_error_save"], e));
    }

};

export let deleteTaskC = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const taskCService = new TaskCService();

    try {
        await taskCService.delete(id);
        res.status(config.code_success_http).json({ message: config["success_message"] });

    } catch (e) {
        logger.error("[ERROR] delete TaskC " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskC-message_error_delete"], e));
    }

};
