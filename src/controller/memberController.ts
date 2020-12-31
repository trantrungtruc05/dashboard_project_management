import { Request, Response } from "express";
import config from "../config/config.json";
import {SaveMemberReq} from "../request/SaveMemberReq";
import {ErrorResponse} from "../response/ErrorResponse";
import {MemberService} from "../service/MemberService";
import logger from "../utils/logger";

export let getAll = async (req: Request, res: Response) => {

    const memberService = new MemberService();

    try {
        const member = await memberService.getAll();
        res.status(config.code_success_http).json(member);
    } catch (e) {
        logger.error("[ERROR] getAll Member " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["member-message_error_getAll"], e));
    }

};

export let saveOrUpdate = async (req: Request, res: Response) => {

    const {user_id, team_id, report_to, status } = req.body;
    const id = parseInt(req.params.id, 10);

    const memberService = new MemberService();

    try {
        const saveMemberReq = new SaveMemberReq(user_id, team_id, report_to, status);
        saveMemberReq.id = id;

        const member = await memberService.saveOrUpdate(saveMemberReq);
        res.status(config.code_success_http).json(member);
    } catch (e) {
        logger.error("[ERROR] save Member " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["member-message_error_save"], e));
    }

};

export let deleteMember = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id, 10);

    const memberService = new MemberService();

    try {

        await memberService.delete(id);
        res.status(config.code_success_http).json({ message: config.success_message });

    } catch (e) {
        logger.error("[ERROR] delete Member " + e);
        res.status(config.code_server_error_http).json(new ErrorResponse(config["member-message_error_delete"], e));
    }

};
