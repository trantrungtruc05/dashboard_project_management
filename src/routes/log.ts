import {Router} from "express";
import passport from "passport";
import * as logController from "../controller/logController";

export const log = Router();

log.get("", passport.authenticate("jwt", {session: false}), logController.getAll);
log.get("/getByObject/:objectType/:objectId", passport.authenticate("jwt", {session: false}), logController.getByObject);
log.post("", passport.authenticate("jwt", {session: false}), logController.saveOrUpdate);
log.put("/:id", passport.authenticate("jwt", {session: false}), logController.saveOrUpdate);
