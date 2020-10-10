/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 16:14:57
 * @LastEditors: lax
 * @LastEditTime: 2020-10-10 17:01:28
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		sourceType: "module",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
