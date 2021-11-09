const { calculate } = require("../src/helper/constant");
const assert = require("assert");
describe("Tes Calculate Tax", function () {
	describe("#calculate('123)", function () {
		it("should return empty array when the parameter is not array or the parameter is empty array", function () {
			assert.deepEqual(calculate("123"), []);
		});
	});
	describe("#calculate() with true condition", function () {
		it("should return array of object with true condition", function () {
			const data = [{ name: "Movie", tax_code: 3, price: 150 }];
			assert.deepEqual(calculate(data), [
				{
					name: "Movie",
					tax_code: 3,
					type: "Entertainment",
					refundable: "No",
					price: 150,
					tax: 0.5,
					amount: 150.5,
				},
			]);
		});
	});
});
