import {Router} from "express";
import passport from "passport";
import * as taskController from "../controller/taskController";

export const task = Router();

task.get("/getByUser/:ownerId", passport.authenticate("jwt", {session: false}), taskController.getByUser);
task.post("", passport.authenticate("jwt", {session: false}), taskController.saveOrUpdate);
task.put("/:id", passport.authenticate("jwt", {session: false}), taskController.saveOrUpdate);
task.delete("/:id", passport.authenticate("jwt", {session: false}), taskController.deleteTask);
