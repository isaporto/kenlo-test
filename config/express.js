const express = require("express");
const router = require("../router");

module.exports = () => {
	const app = express();

	app.set("port", 3000);
	app.use(router);

	return app;
};