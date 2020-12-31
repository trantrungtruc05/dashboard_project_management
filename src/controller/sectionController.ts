import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveSectionReq} from "../request/SaveSectionReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {SectionService} from "../service/SectionService";
import logger from "../utils/logger";

export let getByProject = async (req: Request, res: Response) => {

    const projectId = parseInt(req.params.projectId, 10);

    const sectionService = new SectionService();

    try {
        const section = await sectionService.getByProject(projectId);
        res.status(config.code_success_http).json(section);
    } catch (e) {
        logger.error("[ERROR] getByProject Section " + e);
        // tslint:disable-next-line:max-line-length
        res.status(config.code_server_error_http).json(new ErrorResponse(config["section-message_error_getByProject"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {name, project} = req.body;
    const id = parseInt(req.params.id, 10);

    const sectionService = new SectionService();

    try {
        const saveSectionReq = new SaveSectionReq(name, project);
        saveSectionReq.id = id;
        const section = await sectionService.saveOrUpdate(saveSectionReq);
        res.status(config.code_success_http).json(section);
    } catch (e) {
        logger.error("[ERROR] save Section " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["section-message_error_save"], e));
    }

};

export let deleteSection = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const sectionService = new SectionService();

    try {
        await sectionService.delete(id);
        res.status(config.code_success_http).json({ message: config["success_message"] });

    } catch (e) {
        logger.error("[ERROR] delete Section " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["section-message_error_delete"], e));
    }

};
