/**
 * Expose routes
 *
 * @param {Express} app `Express` instance.
 * @api public
 */

module.exports = function routes (app) {
	const version = { v1: "/api/v1", v2: "/api/v2" };

	const user = require("../user_management/user_route");
	const tools = require("../tools/tools_route");
	const practice = require("../practice/practice_route");
	const categories = require("../category/category_route");
	const blog = require("../blog/blog_route");
	
	app.use(version.v1 + "/user", user);
	app.use(version.v1 + "/tools", tools);
	app.use(version.v1 + "/practice", practice);
	app.use(version.v1 + "/category", categories);
	app.use(version.v1 + "/blog", blog);
};
