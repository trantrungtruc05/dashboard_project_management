import {Router} from "express";
import passport from "passport";
import * as teamController from "../controller/teamController";

export const team = Router();

team.get("", passport.authenticate("jwt", {session: false}), teamController.getAll);
team.get("/:id", passport.authenticate("jwt", {session: false}), teamController.getById);
team.get("/getByUser/:userId", passport.authenticate("jwt", {session: false}), teamController.getByUserId);
team.post("", teamController.saveOrUpdate);
team.put("/:id", passport.authenticate("jwt", {session: false}), teamController.saveOrUpdate);
team.delete("/:id", passport.authenticate("jwt", {session: false}), teamController.deleteTeam);
