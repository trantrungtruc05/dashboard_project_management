import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveProjectReq} from "../request/SaveProjectReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {ProjectService} from "../service/ProjectService";
import {UserRoleService} from "../service/UserRoleService";
import {UserService} from "../service/UserService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const projectService = new ProjectService();

    try {
        const project = await projectService.getAll();
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] getAll Project " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_getAll"], e));
    }

};

export let getAllByUser = async (req: Request, res: Response) => {

    const header = req.get("Authorization");
    const projectService = new ProjectService();

    const userService = new UserService();
    const user = await userService.getUserFromToken(header);

    try {
        const project = await projectService.getAllByUser((user as any).id);
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] getAllByUser Project " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_getAll"], e));
    }

};

export let getById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const projectService = new ProjectService();

    try {
        const project = await projectService.getById(id);
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] getById Project " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_getById"], e));
    }

};

export let getByTeamId = async (req: Request, res: Response) => {

    const teamId = parseInt(req.params.teamId, 10);

    const projectService = new ProjectService();

    try {
        const project = await projectService.getByTeam(teamId);
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] getByTeamId Project " + e);
        // tslint:disable-next-line:max-line-length
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_getByTeamId"], e));
    }

};

export let getByUserId = async (req: Request, res: Response) => {

    const userId = parseInt(req.params.userId, 10);

    const projectService = new ProjectService();

    try {
        const project = await projectService.getByManager(userId);
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] getByUserId Project " + e);
        // tslint:disable-next-line:max-line-length
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_getByUserId"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, description, team_id, manager, doer, advisor, repo_id, status } = req.body;
    const id = parseInt(req.params.id, 10);

    const projectService = new ProjectService();

    try {
        const saveProjectReq = new SaveProjectReq(name, description, team_id, manager, doer, advisor, repo_id, status);
        saveProjectReq.id = id;
        const project = await projectService.saveOrUpdate(saveProjectReq);
        res.status(config.code_success_http).json(project);
    } catch (e) {
        logger.error("[ERROR] save Project " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_save"], e));
    }

};

export let deleteProject = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const projectService = new ProjectService();

    try {
        // check Exist project before Delete
        const project = await projectService.getById(id);

        if (project.length <= 0) {
            res.status(config.code_conflict_http).json({message: "Not found projectId: " + id});
        } else {
            await projectService.delete(id);
            res.status(config.code_success_http).json({message: config.success_message});
        }

    } catch (e) {
        logger.error("[ERROR] delete Project " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["project-message_error_delete"], e));
    }

};
