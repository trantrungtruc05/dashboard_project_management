import {Router} from "express";
import passport from "passport";
import * as projectController from "../controller/projectController";
import permit from "../config/permission";

export const project = Router();

project.get("", passport.authenticate("jwt", {session: false}), permit("/project", "GET"), projectController.getAll);
project.get("/getAllByUser", passport.authenticate("jwt", {session: false}), permit("/project", "GET"), projectController.getAllByUser);
project.get("/:id", passport.authenticate("jwt", {session: false}), permit("/project/:id", "GET"), projectController.getById);
// project.get("/getByTeam/:teamId", passport.authenticate("jwt", {session: false}), permit("/project/getByTeam/:teamId", "GET"), projectController.getByTeamId);
// project.get("/getByUser/:userId", passport.authenticate("jwt", {session: false}), permit("/project/getByUser/:userId", "GET"), projectController.getByUserId);
project.post("", passport.authenticate("jwt", {session: false}), permit("/project", "POST"), projectController.saveOrUpdate);
project.put("/:id", passport.authenticate("jwt", {session: false}), permit("/project/:id", "PUT"), projectController.saveOrUpdate);
project.delete("/:id", passport.authenticate("jwt", {session: false}), permit("/project/:id", "DELETE"), projectController.deleteProject);
