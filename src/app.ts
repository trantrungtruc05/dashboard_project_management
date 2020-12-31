import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { project } from "./routes/project";
import { team } from "./routes/team";
import { user } from "./routes/user";
import { member } from "./routes/member";
import { repo } from "./routes/repo";
import { progress } from "./routes/progress";
import { progressSc } from "./routes/progressSc";
import { section } from "./routes/section";
import { task } from "./routes/task";
import { taskC } from "./routes/taskC";
import { taskA } from "./routes/taskA";
import { status } from "./routes/status";
import { log } from "./routes/log";
import { userRole } from "./routes/userRole";
import { role } from "./routes/role";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

export const app = express();

require("./config/passport");
app.use(passport.initialize());

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: "5mb" }));

const allowedOrigins = new Array();
const getAllAllowOrigins = process.env.ALLOWER_ORIGINS.split(";");

for (const allAllowOrigin of getAllAllowOrigins) {
  allowedOrigins.push(allAllowOrigin);
}

app.use(cors({
  origin(origin, callback) {
    if (!origin) { return callback(null, true); }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not " +
        "allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/project", project);
app.use("/team", team);
app.use("/user", user);
app.use("/member", member);
app.use("/repo", repo);
app.use("/progress", progress);
app.use("/progressc", progressSc);
app.use("/section", section);
app.use("/task", task);
app.use("/taskc", taskC);
app.use("/taska", taskA);
app.use("/status", status);
app.use("/log", log);
app.use("/userRole", userRole);
app.use("/role", role);
