import { Sequelize } from "sequelize";
// @ts-ignore
import { development } from "../config/config";

const HOST = development.host;
const DATABASE = development.database;
const USERNAME = development.username;
const PASSWORD = development.password;
const DIALECT = development.dialect;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

try {
  sequelize.authenticate().then(res => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export { sequelize };
