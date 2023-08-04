const constant = require("../utility/constants");
require("../models/blog");
const blog = require("mongoose").model(constant.BLOG);
const { comResponse } = require("../utility/common");
const { clone } = require("../utility/common_functions");
const baseControl = require("../base/base_controller");
const logger = require("../../log");

exports.add = async (req, res) => {
	try {
		const obj = {
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			userDetails:req.body.userDetails
		};
		const blogDocs = await baseControl.insert(blog, obj);
		console.log(blogDocs);
		if (blogDocs.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, blogDocs.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.test = async (req, res) => {
	try {
		logger.log({ level: "info", message:"Update Sub Category updateSubCategory" });
		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};