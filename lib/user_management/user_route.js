const express = require("express");
const route = express.Router();
const user = require("./user_controller");
const userValidator = require("./user_validator");
const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");

route.get("/userDetails/:id",cookieJwtAuth, user.listByID);
route.get("/user_list",cookieJwtAuth, user.list);
route.get("/NodeJSPractice", user.NodeJSPractice);
route.get("/logics", user.logics);
route.post("/user_add",cookieJwtAuth, userValidator.user, user.userAdd);
route.put("/user_edit",cookieJwtAuth, userValidator._id, userValidator.user, user.userEdit);
route.post("/login", user.login);


module.exports = route;
