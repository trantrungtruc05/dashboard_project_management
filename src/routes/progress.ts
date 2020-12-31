import {Router} from "express";
import passport from "passport";
import * as progressController from "../controller/progressController";

export const progress = Router();

progress.get("", passport.authenticate("jwt", {session: false}), progressController.getAll);
progress.get("/getByProject/:projectId", passport.authenticate("jwt", {session: false}), progressController.getByProject);
progress.post("", passport.authenticate("jwt", {session: false}), progressController.saveOrUpdate);
progress.put("/:id", passport.authenticate("jwt", {session: false}), progressController.saveOrUpdate);
progress.delete("/:id", passport.authenticate("jwt", {session: false}), progressController.deleteProgress);
