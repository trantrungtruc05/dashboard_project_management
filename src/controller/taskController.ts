import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveTaskReq} from "../request/SaveTaskReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {TaskService} from "../service/TaskService";
import logger from "../utils/logger";

export let getByUser = async (req: Request, res: Response) => {

    const ownerId = parseInt(req.params.ownerId, 10);

    const taskService = new TaskService();

    try {
        const task = await taskService.getByUser(ownerId);
        res.status(config.code_success_http).json(task);
    } catch (e) {
        logger.error("[ERROR] getByUser Task " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["task-message_error_getByUser"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, description, section_id, owner, assignee, follower, parent, status} = req.body;
    const id = parseInt(req.params.id, 10);

    const taskService = new TaskService();

    try {
        const saveTaskReq = new SaveTaskReq(name, description, section_id, owner, assignee, follower, parent, status);
        saveTaskReq.id = id;
        const task = await taskService.saveOrUpdate(saveTaskReq);
        res.status(config.code_success_http).json(task);
    } catch (e) {
        logger.error("[ERROR] save Task " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["task-message_error_save"], e));
    }

};

export let deleteTask = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const taskService = new TaskService();

    try {
        await taskService.delete(id);
        res.status(config.code_success_http).json({ message: config["success_message"] });

    } catch (e) {
        logger.error("[ERROR] delete Task " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["task-message_error_delete"], e));
    }

};
