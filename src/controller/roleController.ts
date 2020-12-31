import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveRoleReq} from "../request/SaveRoleReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {RoleService} from "../service/RoleService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const roleService = new RoleService();

    try {
        const role = await roleService.getAll();
        res.status(config.code_success_http).json(role);
    } catch (e) {
        logger.error("[ERROR] getAll role " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["role-message_error_getAll"], e));
    }

};

export let getById = async (req: Request, res: Response) => {

    const roleService = new RoleService();
    const id = parseInt(req.params.id, 10);

    try {
        const role = await roleService.getById(id);
        res.status(config.code_success_http).json(role);
    } catch (e) {
        logger.error("[ERROR] getAll Role " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["role-message_error_getAll"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {roleName} = req.body;
    const id = parseInt(req.params.id, 10);

    const roleService = new RoleService();

    try {
        const saveRoleReq = new SaveRoleReq(roleName);
        saveRoleReq.id = id;

        const role = await roleService.saveOrUpdate(saveRoleReq);
        res.status(config.code_success_http).json(role);
    } catch (e) {
        logger.error("[ERROR] save Role " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["role-message_error_save"], e));
    }

};

export let deleteRole = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const roleService = new RoleService();

    try {
        // check Exist Role before Delete
        const role = await roleService.getById(id);

        if (role.length <= 0) {
            res.status(config["code_conflict_http"]).json({message: "Not found roleId: " + id});
        } else {
            await roleService.delete(id);
            res.status(config.code_success_http).json({message: config["success_message"]});
        }

    } catch (e) {
        logger.error("[ERROR] delete Role " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["role-message_error_delete"], e));
    }

};
