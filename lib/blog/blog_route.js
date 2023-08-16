const express = require("express");
const route = express.Router();
const blog = require("./blog_controller");
const blogValidator = require("./blog_validator");
const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");

route.put("/:id", cookieJwtAuth, blog.update);
route.get("/:id", cookieJwtAuth, blog.listById);
route.post("/add", cookieJwtAuth, blogValidator.add, blog.add);
route.get("/list", cookieJwtAuth, blog.list);
route.post("/uploadFile", blog.uploadFile);
route.delete("/:id", cookieJwtAuth, blog.delete);

module.exports = route;
