/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 14:01:01
 * @LastEditors: lax
 * @LastEditTime: 2020-11-03 22:57:37
 */
const wxHandlerName = "wxsdk-handler";
const fs = require("fs");
const { EOL } = require("os");

module.exports = (api) => {
	const json = require(api.resolve("./package.json"));

	api.render("./template");

	injectDependencies(api);
	injectApp(api);

	if (api.hasPlugin("eslint")) {
		applyESLint(api);
	}
};

function injectApp(api) {
	api.injectImports(api.entryFile, `import wxHandler from "${wxHandlerName}";`);
}

function injectDependencies(api) {
	const dependencies = {};
	dependencies[wxHandlerName] = "^1.1.1";

	api.extendPackage({ dependencies });
}

const applyESLint = (module.exports.applyESLint = (api) => {
	api.extendPackage({
		eslintConfig: {
			globals: {
				wx: true,
			},
		},
	});
});

module.exports.hooks = (api) => {
	api.afterInvoke(() => {
		const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
			encoding: "utf-8",
		});
		const lines = contentMain.split(/\r?\n/g);
		const renderIndex = lines.findIndex((line) => line.match(/wxHandler/));
		lines[renderIndex] += `${EOL} Vue.use(wxHandler, {
      configFile: require("./../wx.js"),
      config:
        process.env.NODE_ENV === "development"
          ? {
              debug: true,
              appid: "",
              server: "https://xxx/",
              path: ""
            }
          : {}
    }); `;

		fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: "utf-8" });
	});
};
