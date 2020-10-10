/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 14:17:29
 * @LastEditors: lax
 * @LastEditTime: 2020-10-10 14:52:46
 */
module.exports = (api, options) => {
    api.chainWebpack(webpackConfig => {
      webpackConfig.module
			.rule("js")
			.include.add("/packages/")
			.end()
			.use("babel")
			.loader("babel-loader");
    })
  }