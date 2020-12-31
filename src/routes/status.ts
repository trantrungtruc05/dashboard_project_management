import {Router} from "express";
import passport from "passport";
import * as statusController from "../controller/statusController";

export const status = Router();

status.get("", passport.authenticate("jwt", {session: false}), statusController.getAll);
status.post("", passport.authenticate("jwt", {session: false}), statusController.saveOrUpdate);
status.put("/:id", passport.authenticate("jwt", {session: false}), statusController.saveOrUpdate);
status.delete("/:id", passport.authenticate("jwt", {session: false}), statusController.deleteStatus);
