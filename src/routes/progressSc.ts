import {Router} from "express";
import passport from "passport";
import * as progressScController from "../controller/progressScController";

export const progressSc = Router();

progressSc.get("/getByProgress/:progressId", passport.authenticate("jwt", {session: false}), progressScController.getByProgress);
progressSc.post("", passport.authenticate("jwt", {session: false}), progressScController.saveOrUpdate);
progressSc.put("/:id", passport.authenticate("jwt", {session: false}), progressScController.saveOrUpdate);
progressSc.delete("/:id", passport.authenticate("jwt", {session: false}), progressScController.deleteProgressSc);
