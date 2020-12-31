import {Router} from "express";
import passport from "passport";
import * as repoController from "../controller/repoController";

export const repo = Router();

repo.get("", passport.authenticate("jwt", {session: false}), repoController.getAll);
repo.get("/:id", passport.authenticate("jwt", {session: false}), repoController.getById);
repo.post("", passport.authenticate("jwt", {session: false}), repoController.saveOrUpdate);
repo.put("/:id", passport.authenticate("jwt", {session: false}), repoController.saveOrUpdate);
repo.delete("/:id", passport.authenticate("jwt", {session: false}), repoController.deleteRepo);
