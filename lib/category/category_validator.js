const Joi = require("joi");
const { comResponse } = require("../utility/common");

exports.add = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			name: Joi.string().min(2).max(25).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};
exports.addSubCategory = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			categoryId: Joi.string().alphanum().length(24).required().error(error => {
				switch (error[0].type) {
				case "any.empty":
					error[0].message = "_id is required!";
					break;
				case "string.length":
					error[0].message = `_id should have ${error[0].context.limit} characters!`;
					break;
				case "string.alphanum":
					error[0].message = "_id should be alphanumeric!";
					break;
				default:
					break;
				}
				return error;
			}),
			subCategory: Joi.array().items(
				Joi.object().keys({
					name: Joi.string().min(2).max(25).required().error(error => {
						return error;
					})
				}).unknown(true)
			)
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};
exports.updateSubCategory = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			name: Joi.string().min(2).max(25).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};
exports._id = (req, res, next) => {
	const schema = Joi.object().keys({
		params: Joi.object().keys({
			_id: Joi.string().alphanum().length(24).required().error(error => {
				switch (error[0].type) {
				case "any.empty":
					error[0].message = "_id is required!";
					break;
				case "string.length":
					error[0].message = `_id should have ${error[0].context.limit} characters!`;
					break;
				case "string.alphanum":
					error[0].message = "_id should be alphanumeric!";
					break;
				default:
					break;
				}
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};
exports.updateValidationId = (req, res, next) => {
	const schema = Joi.object().keys({
		params: Joi.object().keys({
			categoryId: Joi.string().alphanum().length(24).required().error(error => {
				switch (error[0].type) {
				case "any.empty":
					error[0].message = "categoryId is required!";
					break;
				case "string.length":
					error[0].message = `categoryId should have ${error[0].context.limit} characters!`;
					break;
				case "string.alphanum":
					error[0].message = "categoryId should be alphanumeric!";
					break;
				default:
					break;
				}
				return error;
			}),
			subCategoryId: Joi.string().alphanum().length(24).required().error(error => {
				switch (error[0].type) {
				case "any.empty":
					error[0].message = "subCategoryId is required!";
					break;
				case "string.length":
					error[0].message = `subCategoryId should have ${error[0].context.limit} characters!`;
					break;
				case "string.alphanum":
					error[0].message = "subCategoryId should be alphanumeric!";
					break;
				default:
					break;
				}
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};
