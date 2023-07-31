const express = require("express");
const route = express.Router();
const category = require("./category_controller");
const categoryValidator = require("./category_validator");
const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");

route.post("/add", cookieJwtAuth, categoryValidator.add, category.add);
route.put("/edit/:_id", cookieJwtAuth, categoryValidator._id, categoryValidator.add, category.edit);
route.delete("/delete/:_id", cookieJwtAuth, categoryValidator._id, category.delete);
route.get("/listById/:_id", cookieJwtAuth, categoryValidator._id, category.listById);
route.get("/list", cookieJwtAuth, category.list);

route.post("/addSubCategory", cookieJwtAuth, category.addSubCategory);
route.get("/listSubcategory/:categoryId", cookieJwtAuth, category.listSubCategory);
route.put("/updateSubcategory/:categoryId/:subCategoryId", cookieJwtAuth, category.updateSubCategory);
route.delete("/deleteSubcategory/:categoryId/:subCategoryId", cookieJwtAuth, category.deleteSubCategory);


module.exports = route;
