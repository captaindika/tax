const { Sequelize } = require("sequelize");
require("dotenv").config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } =
	process.env;

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
	host: POSTGRES_HOST,
	dialect: "postgres",
	logging: false,
});

module.exports = sequelize;
