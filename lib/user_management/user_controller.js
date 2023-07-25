const constant = require("../utility/constants");
require("../models/users");
const users = require("mongoose").model(constant.USER);
const baseControl = require("../base/base_controller");
const commonFiles = require("../utility/common");
const { comResponse } = require("../utility/common");
const commonFunction = require("../utility/common_functions");
const exampleFunctions = require("../utility/example_functions");
const utilKey = require("../utility/util_keys");
const ObjID = require("mongodb").ObjectId;
const bcrypt = require("bcryptjs");
const util = require("util");
const genSalt = util.promisify(bcrypt.genSalt);
const hash = util.promisify(bcrypt.hash);
const compare = util.promisify(bcrypt.compare);
const jwt = require("jsonwebtoken");



exports.userAdd = async (req, res) => {
	try {
		// Mobile and Email Check
		const aggre = { isDeleted: false, $or: [{ mobile: req.body.mobile }, { email: req.body.email }] };
		const MobileEmailDataCheck = await baseControl.get(users, aggre, {});
		if (MobileEmailDataCheck.status) return res.status(404).send(comResponse(res, 404, false, constant.MSG_MOBILE_EMAIL_PRESENT, constant.MSG_MOBILE_EMAIL_PRESENT));

		const salt = await genSalt(10);
		const hashedPassword = await hash(req.body.password, salt);

		const objs = {
			user_id: req.body.user_id,
			email: req.body.email,
			name: {
				first: req.body.first_name,
				last: req.body.last_name
			},
			gender: req.body.gender,
			// password: commonFunction.generateRandomNumber(utilKey.RANDOM_PASSWORD_LENGTH), // generate random password
			password: hashedPassword,
			dob: req.body.dob,
			mobile: req.body.mobile,
			status: constant.INACTIVE
		};
		const userInsertionDetails = await baseControl.insert(users, objs);
		if (userInsertionDetails.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_USER_ADDED, userInsertionDetails.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_ERROR, constant.MSG_ERROR));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, "Catch", error.toString()));
	}
};
exports.userEdit = async (req, res) => {
	try {
		// Email/Mobile already present
		const aggre = {
			isDeleted: false,
			$or: [{ mobile: req.body.mobile }, { email: req.body.email }],
			$ne: { _id: req.body._id }
		};
		const MobileEmailDataCheck = await baseControl.get(users, aggre, {});
		if (MobileEmailDataCheck.status) return res.status(404).send(comResponse(res, 404, false, constant.MSG_MOBILE_EMAIL_PRESENT, constant.MSG_MOBILE_EMAIL_PRESENT));

		let docs = { status: false };
		const objs = {
			email: req.body.email,
			"name.first": req.body.first_name,
			"name.last": req.body.last_name,
			gender: req.body.gender,
			dob: req.body.dob,
			mobile: req.body.mobile
		};
		docs = await baseControl.update(users, req.body._id, objs);
		if (docs.status) return res.status(201).send(comResponse(res, 201, true, "user data's Created/Modified successfully", "user data's Created/Modified successfully"));
		return res.status(404).send(comResponse(res, 404, false, "user data Error", "user data Error"));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, "Catch", error.toString()));
	}
};
exports.list = async (req, res) => {
	try {
		const aggre = { isDeleted: false, isActive: true };
		const doc = await baseControl.get_list(users, aggre, {});
		if (doc.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_USER_LIST, doc.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, doc.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.listByID = async (req, res) => {
	try {
		const aggre = {
			_id: req.params.id
		};
		console.log(aggre);
		const userDetails = await baseControl.get(users, aggre, { _id: 1, user_id: 1, email: 1, dob: 1, gender: 1, mobile: 1, status: 1 });
		if (userDetails.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_USER_DETAILS, userDetails.data));
		return res.status(404).send(comResponse(res, 404, false, constant.MSG_NO_DATA, userDetails.data));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.login = async (req, res) => {
	try {
		const aggre = { isDeleted: false, $or: [{ mobile: req.body.mobile }, { email: req.body.email }] };
		const userDetails = await baseControl.get(users, aggre, {});
		if (!userDetails.status) return res.status(401).send(comResponse(res, 404, false, constant.MSG_UNAUTHORIZED, constant.MSG_UNAUTHORIZED));
		let passwordCheck = await compare(req.body.password, userDetails.data.password);
		console.log(passwordCheck);
		if (passwordCheck) {
			let token = jwt.sign(
				{
					_id: userDetails.data._id,
					email: userDetails.data.email
				},
				process.env.JWT_SECRET_KEY,
				{ expiresIn: "1h" }
			);

			//Cookie
			res.cookie("token", token, {
				httpOnly: true,
				//secure:true,
				//maxAge: 1000000,
				//signed:true,
			});
			//let tokenUpdateDetails = await baseControl.update(users, userDetails.data._id, { access_token: token })
			if (!token)
				return res.status(404).send(comResponse(res, 404, false, constant.MSG_TOKEN_FAILED, constant.MSG_TOKEN_FAILED));
			Object.assign(userDetails.data, { token });
			delete userDetails.data.password;
			return res.status(201).send(comResponse(res, 201, true, constant.MSG_LOGIN_SUCCESS, userDetails.data));
		}
		return res.status(401).send(comResponse(res, 401, false, constant.MSG_UNAUTHORIZED, constant.MSG_UNAUTHORIZED));
	}
	catch (error) {
		return res.status(500).send(comResponse(res, 500, false, constant.MSG_CATCH, error.toString()));
	}
};
exports.NodeJSPractice = async (req, res) => {
	try {
		// reduce
		// log

		const aggre = { isDeleted: false, isActive: true };
		const userData = await baseControl.get_list(users, aggre, {});

		if (!userData.status) return commonFiles.comResponse(res, 404, false, "No Data", userData.data);
		const objAssign = await exampleFunctions.objectAssignFunction();
		const elementFieldValueChangeInForEach = exampleFunctions.forEachElementFieldChange(userData.data);
		// Array Reduce
		const totalGoals = await exampleFunctions.reduceFunction();
		const arrFnsData = {
			arrReduce: totalGoals,
			objAssign,
			elementFieldValueChangeInForEach,
			closure: "Closure"
		};
		return res.status(201).send(comResponse(res, 201, true, "NodeJS Practice", arrFnsData));
	} catch (err) {
		// logger.debug(err)
		console.log(err);
	}
};
exports.NodeJSPracticeReadFile = async () => {
};
exports.logics = async () => {
	//
	const n = 3;
	for (let i = 0; i < n; i++) {
		const arr = [];
		for (let j = 0; j <= i; j++) {
			arr.push("*");
		}
		console.log(arr);
		console.log("\n");
	}
};

//response send 