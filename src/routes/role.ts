import {Router} from "express";
import passport from "passport";
import * as roleController from "../controller/roleController";

export const role = Router();

role.get("", passport.authenticate("jwt", {session: false}), roleController.getAll);
role.get("/:id", passport.authenticate("jwt", {session: false}), roleController.getById);
role.post("", passport.authenticate("jwt", {session: false}), roleController.saveOrUpdate);
role.put("/:id", passport.authenticate("jwt", {session: false}), roleController.saveOrUpdate);
role.delete("/:id", passport.authenticate("jwt", {session: false}), roleController.deleteRole);
