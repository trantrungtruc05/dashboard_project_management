import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveTaskAReq} from "../request/SaveTaskAReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {TaskAService} from "../service/TaskAService";
import logger from "../utils/logger";

export let getByTask = async (req: Request, res: Response) => {

    const taskId = parseInt(req.params.taskId, 10);

    const taskAService = new TaskAService();

    try {
        const taskA = await taskAService.getByTask(taskId);
        res.status(config.code_success_http).json(taskA);
    } catch (e) {
        logger.error("[ERROR] getByTask TaskA " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskA-message_error_getByTask"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {task, by, when, link, filename } = req.body;
    const id = parseInt(req.params.id, 10);

    const taskAService = new TaskAService();

    try {
        const saveTaskAReq = new SaveTaskAReq(task, by, when, link, filename);
        saveTaskAReq.id = id;
        const taskA = await taskAService.saveOrUpdate(saveTaskAReq);
        res.status(config.code_success_http).json(taskA);
    } catch (e) {
        logger.error("[ERROR] save TaskA " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskA-message_error_save"], e));
    }

};

export let deleteTaskA = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const taskAService = new TaskAService();

    try {
        await taskAService.delete(id);
        res.status(config.code_success_http).json({ message: config.success_message });

    } catch (e) {
        logger.error("[ERROR] delete TaskA " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["taskA-message_error_delete"], e));
    }

};
