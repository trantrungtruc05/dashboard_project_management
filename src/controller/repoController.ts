import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveRepoReq} from "../request/SaveRepoReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {RepoService} from "../service/RepoService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const repoService = new RepoService();

    try {
        const repo = await repoService.getAll();
        res.status(config.code_success_http).json(repo);
    } catch (e) {
        logger.error("[ERROR] getAll Repo " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["repo-message_error_getAll"], e));
    }

};

export let getById = async (req: Request, res: Response) => {

    const repoService = new RepoService();
    const id = parseInt(req.params.id, 10);

    try {
        const repo = await repoService.getById(id);
        res.status(config.code_success_http).json(repo);
    } catch (e) {
        logger.error("[ERROR] getAll Repo " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["repo-message_error_getAll"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, parent, order_no, status } = req.body;
    const id = parseInt(req.params.id, 10);

    const repoService = new RepoService();

    try {
        const saveRepoReq = new SaveRepoReq(name, parent, order_no, status);
        saveRepoReq.id = id;

        const repo = await repoService.saveOrUpdate(saveRepoReq);
        res.status(config.code_success_http).json(repo);
    } catch (e) {
        logger.error("[ERROR] save Repo " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["repo-message_error_save"], e));
    }

};

export let deleteRepo = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const repoService = new RepoService();

    try {
        // check Exist Repo before Delete
        const repo = await repoService.getById(id);

        if (repo.length <= 0) {
            res.status(config["code_conflict_http"]).json({message: "Not found repoId: " + id});
        } else {
            await repoService.delete(id);
            res.status(config.code_success_http).json({message: config["success_message"]});
        }

    } catch (e) {
        logger.error("[ERROR] delete Repo " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["repo-message_error_delete"], e));
    }

};
