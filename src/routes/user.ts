import {Router} from "express";
import passport from "passport";
import * as userController from "../controller/userController";

export const user = Router();

user.get("", passport.authenticate("jwt", {session: false}), userController.getAll);
user.get("/:id", passport.authenticate("jwt", {session: false}), userController.getById);
user.post("", passport.authenticate("jwt", {session: false}), userController.saveOrUpdate);
user.put("/:id", passport.authenticate("jwt", {session: false}), userController.saveOrUpdate);
user.delete("/:id", passport.authenticate("jwt", {session: false}), userController.deleteUser);
