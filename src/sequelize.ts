import { Sequelize } from "sequelize-typescript";
import "./config/env";

export const sequelize = new Sequelize({
    host: process.env.HOST_NAME_DB,
    database: process.env.DATABASE_NAME,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    dialect: "postgres",
    models: [__dirname + "/entity"],
    logging: false
});
