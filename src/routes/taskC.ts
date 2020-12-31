import {Router} from "express";
import passport from "passport";
import * as taskCController from "../controller/taskCController";

export const taskC = Router();

taskC.get("/getByTask/:taskId", passport.authenticate("jwt", {session: false}), taskCController.getByTask);
taskC.post("", passport.authenticate("jwt", {session: false}), taskCController.saveOrUpdate);
taskC.put("/:id", passport.authenticate("jwt", {session: false}), taskCController.saveOrUpdate);
taskC.delete("/:id", passport.authenticate("jwt", {session: false}), taskCController.deleteTaskC);
