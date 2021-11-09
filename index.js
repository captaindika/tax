const express = require("express");
const cors = require("cors");
const db = require("./src/connection/db");
const { tax } = require("./src/route/tax");
const Tax = require("./src/model/tax");
const app = express();
const port = 3000;

db.authenticate()
	.then(async () => {
		console.log("Database connected");
		Tax.sync({ force: false });
	})
	.catch((err) => console.log("Fail to connect DB: ", err.message));

app.use(cors());
app.use(express.json());
app.use("/api/v1.0", tax);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
