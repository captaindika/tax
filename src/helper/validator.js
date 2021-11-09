let yup = require("yup");

const insertCheck = async (req, res, next) => {
	try {
		const schema = yup.object({
			name: yup
				.string()
				.min(4)
				.required("name must be required and min length 4"),
			tax_code: yup
				.number()
				.min(1, "tax_code only: 1, 2, 3")
				.max(3, "tax_code only: 1, 2, 3")
				.required(),
			price: yup
				.number()
				.min(0, "Price can't be minus")
				.required("price must be required"),
		});
		await schema.validate(req.body);
		next();
	} catch (err) {
		return res.status(400).json({ status: err.name, message: err.errors });
	}
};

module.exports = {
	insertCheck,
};
