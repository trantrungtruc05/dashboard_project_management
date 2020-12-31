import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveTeamReq} from "../request/SaveTeamReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {TeamService} from "../service/TeamService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const teamService = new TeamService();

    try {
        const team = await teamService.getAll();
        res.status(config.code_success_http).json(team);
    } catch (e) {
        logger.error("[ERROR] getAll Team " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["team-message_error_getAll"], e));
    }

};

export let getById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const teamService = new TeamService();

    try {
        const team = await teamService.getById(id);
        res.status(config.code_success_http).json(team);
    } catch (e) {
        logger.error("[ERROR] getById Team " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["team-message_error_getById"], e));
    }

};

export let getByUserId = async (req: Request, res: Response) => {

    const userId = parseInt(req.params.userId, 10);

    const teamService = new TeamService();

    try {
        const team = await teamService.getByManager(userId);
        res.status(config.code_success_http).json(team);
    } catch (e) {
        logger.error("[ERROR] getByUserId Team " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["team-message_error_getByUserId"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, description, manager, member, status } = req.body;

    const id = parseInt(req.params.id, 10);

    const teamService = new TeamService();

    try {
        const saveTeamReq = new SaveTeamReq(name, description, manager, member, status);
        saveTeamReq.id = id;
        const team = await teamService.saveOrUpdate(saveTeamReq);
        res.status(config.code_success_http).json(team);
    } catch (e) {
        logger.error("[ERROR] save Team " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["team-message_error_save"], e));
    }

};

export let deleteTeam = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const teamService = new TeamService();

    try {
        // check Exist team before Delete
        const team = await teamService.getById(id);

        if (team.length <= 0) {
            res.status(config.code_server_error_http).json({message: "Not found teamId: " + id});
        } else {
            await teamService.delete(id);
            res.status(config.code_success_http).json({message: "Success"});
        }

    } catch (e) {
        logger.error("[ERROR] delete Team " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["team-message_error_delete"], e));
    }

};
