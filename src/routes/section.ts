import {Router} from "express";
import passport from "passport";
import * as sectionController from "../controller/sectionController";

export const section = Router();

section.get("/getByProject/:progressId", passport.authenticate("jwt", {session: false}), sectionController.getByProject);
section.post("", passport.authenticate("jwt", {session: false}), sectionController.saveOrUpdate);
section.put("/:id", passport.authenticate("jwt", {session: false}), sectionController.saveOrUpdate);
section.delete("/:id", passport.authenticate("jwt", {session: false}), sectionController.deleteSection);
