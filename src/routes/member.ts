import {Router} from "express";
import passport from "passport";
import * as memberController from "../controller/memberController";

export const member = Router();

member.get("", passport.authenticate("jwt", {session: false}), memberController.getAll);
member.post("", passport.authenticate("jwt", {session: false}), memberController.saveOrUpdate);
member.put("/:id", passport.authenticate("jwt", {session: false}), memberController.saveOrUpdate);
member.delete("/:id", passport.authenticate("jwt", {session: false}), memberController.deleteMember);
