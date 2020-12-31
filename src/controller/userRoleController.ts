import {Request, Response} from "express";
import config from "../config/config.json";
import {UserRoleService} from "../service/UserRoleService";
import {UserService} from "../service/UserService";

export let getRoleByUserId = async (req: Request, res: Response) => {

    const header = req.get("Authorization");

    const userService = new UserService();
    const user = await userService.getUserFromToken(header);

    const userRoleService = new UserRoleService();
    const roles = await userRoleService.getRoleByUserId((user as any).id);

    res.status(config.code_success_http).json(roles);

};

export let getUserByRoleId = async (req: Request, res: Response) => {

    const roleId = parseInt(req.params.roleId, 10);
    const userRoleService = new UserRoleService();
    const roles = await userRoleService.getUserByRoleId(roleId);

    res.status(config.code_success_http).json(roles);

};

export let getAll = async (req: Request, res: Response) => {

    const userRoleService = new UserRoleService();

    const userRole = await userRoleService.getAll();

    res.status(config.code_success_http).json(userRole);

};
