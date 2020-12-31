import {createServer} from "http";
import {app} from "./app";
import {sequelize} from "./sequelize";
import "./config/env";
import logger from "./utils/logger";

(async () => {
  await sequelize.sync();

  createServer(app)
    .listen(
      process.env.PORT,
      () => console.log(`Server running on port ${process.env.PORT}`)
    );
})();
