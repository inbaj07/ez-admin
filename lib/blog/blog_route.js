const express = require("express");
const route = express.Router();
const blog = require("./blog_controller");
const blogValidator = require("./blog_validator");
const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");

route.post("/add", cookieJwtAuth, blog.add);

module.exports = route;
