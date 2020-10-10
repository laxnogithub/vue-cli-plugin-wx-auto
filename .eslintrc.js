/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 16:14:57
 * @LastEditors: lax
 * @LastEditTime: 2020-10-10 16:17:40
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
