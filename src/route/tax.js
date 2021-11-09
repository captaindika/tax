const express = require("express");
const tax = express.Router();
const { insertTax, getTax } = require("../controller/tax");
const { insertCheck } = require("../helper/validator");

tax.get("/tax", getTax);

tax.post("/tax", insertCheck, insertTax);

module.exports = {
	tax,
};
