const constant = require("../utility/constants");
require("../models/blog");
const blog = require("mongoose").model(constant.BLOG);
const { comResponse } = require("../utility/common");
const { clone } = require("../utility/common_functions");
const baseControl = require("../base/base_controller");
const logger = require("../../log");

exports.add = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog add Enter"
		});
		logger.info("Blog add Enter");
		const obj = {
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			userDetails:{
				user_id:req.body.userDetails.user_id,
				first: req.body.userDetails.first,
				last: req.body.userDetails.last
			}
		};
		const blogDocs = await baseControl.insert(blog, obj);
		if (blogDocs.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, blogDocs.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.list = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog List Enter"
		});
		logger.info("Module: Blog, Method: List, Message: start");
		const query = { isDeleted: false, isActive: true };
		const doc = await baseControl.get_list(blog, query, {});
		if (doc.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, doc.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, doc.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.listById = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog ListById Enter"
		});
		logger.info("Module: Blog, Method: ListById, Message: start");
		const query = { _id:req.params.id };
		const doc = await baseControl.get_list(blog, query, {});
		if (doc.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, doc.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, doc.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.update = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog update Enter"
		});
		logger.info("Module: Blog, Method: update, Message: start");
		const obj = {
			title:req.body.title,
			content: req.body.content,
			image:req.body.image,
			userDetails:{
				user_id:req.body.user_id,
				first: req.body.first,
				last: req.body.last
			}
		};
		let docs = await baseControl.update(blog, req.params.id, obj);
		if (docs.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
		return res.status(404).send(comResponse(res, 404, true, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.delete = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog delete Enter"
		});
		logger.info("Module: Blog, Method: delete, Message: start");
		const obj = {
			isDeleted: true
		};
		let docs = await baseControl.update(blog, req.params.id, obj);
		if (docs.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_DELETED, constant.MSG_DELETED));
		return res.status(404).send(comResponse(res, 404, true, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.uploadFile = async (req, res) => {
	try {
		logger.log({ level: "info", message:"Blog Upload File start" });
		logger.info("Module: Blog, Method: uploadFile, Message: start");
		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.test = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Blog ListById Enter"
		});
		logger.info("Module: Blog, Method: ListById, Message: start");
		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};