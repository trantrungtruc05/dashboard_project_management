import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveUserReq} from "../request/SaveUserReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {UserService} from "../service/UserService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const userService = new UserService();

    try {
        const user = await userService.getAll();
        res.status(config.code_success_http).json(user);
    } catch (e) {
        logger.error("[ERROR] getAll User " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["user-message_error_getAll"], e));
    }

};

export let getById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const userService = new UserService();

    try {
        const user = await userService.getById(id);
        res.status(config.code_success_http).json(user);
    } catch (e) {
        logger.error("[ERROR] getById User " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["user-message_error_getById"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {username, email, status } = req.body;
    const id = parseInt(req.params.id, 10);

    const userService = new UserService();

    try {
        const saveUserReq = new SaveUserReq(username, email, status);
        saveUserReq.id = id;
        const user = await userService.saveOrUpdate(saveUserReq);
        res.status(config.code_success_http).json(user);
    } catch (e) {
        logger.error("[ERROR] save User " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["user-message_error_save"], e));
    }

};

export let deleteUser = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const userService = new UserService();

    try {
        // check Exist User before Delete
        const user = await userService.getById(id);

        if (user.length <= 0) {
            res.status(config["code_conflict_http"]).json({message: "Not found userId: " + id});
        } else {
            await userService.delete(id);
            res.status(config.code_success_http).json({message: config["success_message"]});
        }

    } catch (e) {
        logger.error("[ERROR] delete User " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["user-message_error_delete"], e));
    }

};
