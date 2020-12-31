import {Router} from "express";
import passport from "passport";
import * as userRoleController from "../controller/userRoleController";

export const userRole = Router();

userRole.get("", passport.authenticate("jwt", {session: false}), userRoleController.getAll);
userRole.get("/getRoleByUser", passport.authenticate("jwt", {session: false}), userRoleController.getRoleByUserId);
userRole.get("/getUserByRole/:roleId", passport.authenticate("jwt", {session: false}), userRoleController.getUserByRoleId);

