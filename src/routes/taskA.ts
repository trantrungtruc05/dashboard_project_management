import {Router} from "express";
import passport from "passport";
import * as taskAController from "../controller/taskAController";

export const taskA = Router();

taskA.get("/getByTask/:taskId", passport.authenticate("jwt", {session: false}), taskAController.getByTask);
taskA.post("", passport.authenticate("jwt", {session: false}), taskAController.saveOrUpdate);
taskA.put("/:id", passport.authenticate("jwt", {session: false}), taskAController.saveOrUpdate);
taskA.delete("/:id", passport.authenticate("jwt", {session: false}), taskAController.deleteTaskA);
