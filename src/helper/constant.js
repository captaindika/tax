// food and beverage -> 10% of price, refundable
// tobacco -> 10 + (2% of price), not refundable
// entertainment -> 0 < price < 100: free ; price >= 100 : 1% of (price - 100), not refundable

const calculate = (data) => {
	if (Array.isArray(data) && data.length > 0) {
		return data.map((element) => {
			let type, refundable, tax;
			if (element.tax_code == 1) {
				type = "Food and Beverage";
				refundable = "Yes";
				tax = 0.1 * element.price;
			}
			if (element.tax_code == 2) {
				type = "Tobacco";
				refundable = "No";
				tax = 10 + 0.02 * element.price;
			}
			if (element.tax_code == 3) {
				type = "Entertainment";
				refundable = "No";
				if (element.price >= 100) {
					tax = 0.01 * (element.price - 100);
				} else {
					tax = 0;
				}
			}
			const amount = element.price + tax;
			return {
				name: element.name,
				tax_code: element.tax_code,
				type,
				refundable,
				price: element.price,
				tax,
				amount,
			};
		});
	} else {
		return [];
	}
};

module.exports = {
	calculate,
};
