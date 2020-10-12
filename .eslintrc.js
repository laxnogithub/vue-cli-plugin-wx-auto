/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 16:14:57
 * @LastEditors: lax
 * @LastEditTime: 2020-10-12 09:19:52
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ["prettier"],
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: "module",
	},
};
