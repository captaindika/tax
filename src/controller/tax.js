const Tax = require("../model/tax");
const { calculate } = require("../helper/constant");
const insertTax = async (req, res) => {
	try {
		const { name, tax_code, price } = req.body;
		const result = await Tax.create({
			name,
			tax_code,
			price,
		});
		if (result) {
			res.status(200).json({ success: true, message: "mantap" });
		} else {
			res.status(400).json({ success: false, message: "Bad Request" });
		}
	} catch (e) {
		res.status(500).json({ success: false, message: e.message });
	}
};

const getTax = async (req, res) => {
	try {
		const result = await Tax.findAll({
			attributes: ["name", "tax_code", "price"],
		});
		const data = calculate(result);
		res.status(200).json({ success: true, data });
	} catch (e) {
		res.status(500).json({ success: false, message: e.message });
	}
};

module.exports = {
	insertTax,
	getTax,
};
