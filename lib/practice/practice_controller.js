const constant = require("../utility/constants");
const users = require("mongoose").model(constant.USER);
const baseControl = require("../base/base_controller");
const { comResponse } = require("../utility/common");
const exampleFunctions = require("../utility/example_functions");
const path = require("path");
const fs = require("fs");

exports.NodeJSPractice = async (req, res) => {
	try {
		// reduce
		// log

		const aggre = { isDeleted: false, isActive: true };
		const userData = await baseControl.get_list(users, aggre, {});

		if (!userData.status) return res.status(201).send(comResponse(res, 500, false, constant.MSG_NO_DATA, userData.data));
		const objAssign = await exampleFunctions.objectAssignFunction();
		const elementFieldValueChangeInForEach = await exampleFunctions.forEachElementFieldChange(userData.data);
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
exports.readFileAsync = async (req, res) => {
	const docs = await exampleFunctions.readFileAsync();
	return res.status(201).send(comResponse(res, 201, true, "NodeJS Practice", docs));// Not working
};
exports.readFileSynchronize = async (req, res) => {
	let docs = "";
	docs = fs.readFileSync(path.join(__dirname, "../../package.json"), "utf8");
	return res.status(201).send(comResponse(res, 201, true, "NodeJS Practice", docs));// Not working
};
exports.forEachAsync = async (req, res) => {
	const aggre = { isDeleted: false, isActive: true };
	const userData = await baseControl.get_list(users, aggre, {});
	if (!userData.status) return res.status(500).send(comResponse(res, 500, false, constant.MSG_NO_DATA, userData.data));
	let docs = "";
	userData.data.forEach(element => {
		docs = userData.data;
	});
	// docs = userData.data
	return res.status(201).send(comResponse(res, 201, true, "NodeJS Practice forEachAsync", { userData: userData.data, docs }));
};
/* exports.practiceFetch = async (req, res) => {
  try {
    const user = {
      name: 'Inba',
      age: '30'
    }
    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const options = {
      method: 'POST',
      headers: {
        'Content-Type':
              'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    }
    // Fake api for making post requests
    const fetchRes = await fetch(
      'http://dummy.restapiexample.com/api/v1/create',
      options)
    return res.status(201).send(comResponse(res, 201, true, 'NodeJS Practice Fetch', { fetchRes }))
  } catch (err) {
    console.log(err)
    return res.status(501).send(comResponse(res, 501, false, constant.MSG_ERROR, err))
  }
} */
exports.logics = async (req, res) => {
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
