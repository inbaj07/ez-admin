/**
 * Expose routes
 *
 * @param {Express} app `Express` instance.
 * @api public
 */

module.exports = function routes(app) {
  const version = { v1: "/api/v1", v2: "/api/v2" };  
  
  const user = require("../user_management/user_route");
  console.log("###########Route index.js 12#############")
  
  app.use(version.v1 + "/user", user);
  
};
