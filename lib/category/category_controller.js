const constant = require("../utility/constants");
require("../models/categories");
const categories = require("mongoose").model(constant.CATEGORIES);
const { comResponse } = require("../utility/common");
const baseControl = require("../base/base_controller");
const logger = require("../../log");
exports.add = async (req, res) => {
	try {
		const objs = {
			name: req.body.name
		};
		const categoriesInsertionDetails = await baseControl.insert(categories, objs);
		if (categoriesInsertionDetails.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, categoriesInsertionDetails.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, "Catch", error.toString()));
	}
};
exports.edit = async (req, res) => {
	try {
		const obj = {
			name:req.body.name
		};
		let docs = await baseControl.update(categories, req.params._id, obj);
		if (docs.status) return res.status(200).send(comResponse(res, 201, true, constant.MSG_USER_EDITED, constant.MSG_USER_EDITED));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_FAILED, constant.MSG_FAILED));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.list = async (req, res) => {
	try {
		logger.log({
			level: "info",
			message:"Category List Enter"
		});
		logger.info("Model: Category, Method: List, Message: start");
		const aggre = { isDeleted: false, isActive: true };
		const doc = await baseControl.get_list(categories, aggre, { _id: 1, name: 1 });
		if (doc.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, doc.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, doc.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.listById = async (req, res) => {
	try {
		const aggre = { _id: req.params._id };
		const doc = await baseControl.get_list(categories, aggre, { _id: 1, name: 1 });
		if (doc.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, doc.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, doc.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.delete = async (req, res) => {
	try {
		const obj = {
			isDeleted:true
		};
		let docs = await baseControl.update(categories, req.params._id, obj);
		if (docs.status) return res.status(200).send(comResponse(res, 201, true, constant.MSG_UPDATED, constant.MSG_UPDATED));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_FAILED, constant.MSG_FAILED));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.addSubCategory = async (req, res) => {
	try {
		const obj = {
			$push:{
				subCategory:{
					$each:req.body.subCategory
				}
			}
		};
		const docs = await baseControl.update_condition(categories, {_id:req.body.categoryId}, obj);
		if (docs.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, docs.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, "Catch", error.toString()));
	}
};
exports.testJest = async (req, res) => {
	try {
		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.test = async (req, res) => {
	try {
		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};