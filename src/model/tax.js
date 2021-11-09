const { DataTypes } = require("sequelize");
const sequelize = require("../connection/db");

const Tax = sequelize.define(
	"tax",
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tax_code: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "tax",
		timestamps: false,
	}
);
module.exports = Tax;
