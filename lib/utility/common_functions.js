const Chance = require("chance");
const mongoose = require("mongoose");
const randomNumber = require("random-number");

const {
	UNIFONIC_APP_SID,
	EMAIL_USERNAME,
	EMAIL_PASSWORD,
	SENDGRID_API_KEY,
	EMAIL_SENDER_ADDRESS,
	SLACK_AUTH_TOKEN
} = require("./util_keys");

// const jwt = require('jsonwebtoken');
exports.toObjectId = (string) => {
	return mongoose.Types.ObjectId(string);
};

exports.generateRandomNumber = (length) => {
	const max = 100000000;
	const min = 100;
	const randomNo = Math.floor(Math.random() * (max - min + 1) + min);
	const chance = new Chance(Date.now() + randomNo);
	const randomStr = chance.string({
		length,
		pool: "abcdefghijklmnopqrstuvwxyz0123456789@"
	});
	return randomStr;
};

exports.getFourDigitOTP = () => {
	const options = {
		min: 1000,
		max: 9999,
		integer: true
	};
	return randomNumber(options);
};

// // JWT Token
// exports.generateJWTToken = (data) => {
//     const token = jwt.sign(data, JWT_SECRET_KEY);
//     return token;
// };

exports.timestampNow = () => new Date().getTime();

exports.timestampNow_in_current = () => {
	const d_t = new Date();
	return (
		d_t.getDate() +
    "-" +
    (d_t.getMonth() + 1) +
    "-" +
    d_t.getFullYear() +
    " " +
    d_t.getHours() +
    ":" +
    d_t.getMinutes() +
    ":" +
    d_t.getMilliseconds()
	);
};

exports.getSecondsDifference = (date1, date2) => {
	const seconds = (date2 - date1) / 1000;
	return seconds;
};

exports.checkSMSResponse = (response /* , body */) =>
	response.statusCode === 200 || response.statusCode === 201;

exports.check_value_or_null = (obj, key) => {
	return key.split(".").reduce(function (o, x) {
		return typeof o === "undefined" || o === null ? o : o[x];
	}, obj);
};

exports.check_value_null = (obj, objs) => {
	// console.log(objs);
	const dd = objs || "";
	const sp = objs.split(".");
	// let obj = sp[0];
	const key = dd.substring(sp[0].length + 1, dd.length);
	return key.split(".").reduce(function (o, x) {
		// console.log(o[x]);
		const ret = typeof o === "undefined" || o === null ? o : o[x];
		// console.log(ret);
		return ret;
	}, obj);
};

exports.show_null_empty_Undefined = (obj) => {
	// console.log(obj);
	if (
		obj === "" ||
    obj === undefined ||
    obj === "undefined" ||
    obj === "null"
	) {
		return null;
	}
	return obj;
};

// check objects and show null if needed
exports.check_objects_show_null = (obj) => {
	const newObj = {};
	// console.log(obj);
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			// console.log(key, " -> ", obj[key], typeof obj[key]);
			const objValue = obj[key];
			if (
				objValue === "" ||
        objValue === undefined ||
        objValue === "undefined" ||
        objValue === "null"
			) {
				newObj[key] = null;
			} else {
				newObj[key] = objValue;
			}
		}
	}
	return newObj;
};
exports.clone = (arrData)=>{
	return JSON.parse(JSON.stringify(arrData));
};
