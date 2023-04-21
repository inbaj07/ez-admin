const constant = require('../utility/constants')
require('../models/users')
const users = require('mongoose').model(constant.USER)
const baseControl = require('../base/base_controller')
const commonFiles = require('../utility/common')
const { comResponse } = require('../utility/common')
const commonFunction = require('../utility/common_functions')
const utilKey = require('../utility/util_keys')
const ObjId = require('mongodb').ObjectID

exports.userAdd = async (req, res) => {
  try {
    // Mobile and Email Check
    const aggre = { isDeleted: false, $or: [{ mobile: req.body.mobile }, { email: req.body.email }] }
    const MobileEmailDataCheck = await baseControl.get(users, aggre, {})
    if (MobileEmailDataCheck.status) return res.status(500).send(comResponse(res, 500, false, constant.MSG_MOBILE_EMAIL_PRESENT, constant.MSG_MOBILE_EMAIL_PRESENT))
    const objs = {
      user_id: req.body.user_id,
      email: req.body.email,
      name: {
        first: req.body.first_name,
        last: req.body.last_name
      },
      gender: req.body.gender,
      // password: commonFunction.generateRandomNumber(utilKey.RANDOM_PASSWORD_LENGTH), // generate random password
      password: req.body.password,
      dob: req.body.dob,
      mobile: req.body.mobile,
      status: constant.INACTIVE
    }
    const userInsertionDetails = await baseControl.insert(users, objs)
    if (userInsertionDetails.status) return res.status(201).send(comResponse(res, 201, true, constant.MSG_USER_ADDED, userInsertionDetails.data))
    return res.status(500).send(comResponse(res, 500, false, constant.MSG_ERROR, constant.MSG_ERROR))
  } catch (error) {
    return res.status(500).send(comResponse(res, 500, false, 'Catch', error.toString()))
  }
}
exports.userEdit = async (req, res) => {
  try {
    // Email/Mobile already present
    const aggre = {
      isDeleted: false,
      $or: [{ mobile: req.body.mobile }, { email: req.body.email }],
      $ne: { _id: ObjId(req.body._id) }
    }
    const MobileEmailDataCheck = await baseControl.get(users, aggre, {})
    if (MobileEmailDataCheck.status) return res.status(500).send(comResponse(res, 500, false, constant.MSG_MOBILE_EMAIL_PRESENT, constant.MSG_MOBILE_EMAIL_PRESENT))

    let docs = { status: false }
    const objs = {
      email: req.body.email,
      'name.first': req.body.first_name,
      'name.last': req.body.last_name,
      gender: req.body.gender,
      dob: req.body.dob,
      mobile: req.body.mobile
    }
    docs = await baseControl.update(users, req.body._id, objs)
    if (docs.status) return res.status(201).send(comResponse(res, 201, true, "user data's Created/Modified successfully", "user data's Created/Modified successfully"))
    return res.status(500).send(comResponse(res, 500, false, 'user data Error', 'user data Error'))
  } catch (error) {
    return res.status(500).send(comResponse(res, 500, false, 'Catch', error.toString()))
  }
}
exports.list = async (req, res) => {
  try {
    const aggre = { isDeleted: false, isActive: true }
    const doc = await baseControl.get_list(users, aggre, {})
    console.log(doc)
    if (doc.status) {
      commonFiles.comResponse(res, 200, true, 'User List', doc.data)
    } else {
      commonFiles.comResponse(res, 500, false, 'No Data', doc.data)
    }
  } catch (error) {
    commonFiles.comResponse(res, 500, false, 'Catch', error.toString())
  }
}
exports.exampleFunctions = async (req, res) => {
  try {
    // object.assign
    /* Object.assign(objs, { 'ungrouped': user_ids });
        Object.assign(objs, { 'students': users });
        obj = await baseControl.insert(student_group, objs); */
    // reduce
    // log

    const aggre = { isDeleted: false, isActive: true }
    const userData = await baseControl.get_list(users, aggre, {})

    if (!userData.status) return commonFiles.comResponse(res, 500, false, 'No Data', userData.data)
    const obj = {
      aaa: 1,
      bbb: 2
    }
    const objAssign = await commonFunction.objectAssignFunction(obj)
    userData.data.forEach(element => {
      element.otp.no = '111'
      Object.assign(obj, { ungrouped: 222 })
    })

    // Array Reduce
    const scorers = [
      { name: 'Christiano Ronaldo', goals: 100 },
      {
        name: 'Messy',
        goals: 100
      }
    ]
    const totalGoals = await commonFunction.reduceFunction(scorers)
    const arrFnsData = {
      arrReduce: totalGoals,
      objAssign
    }
    return commonFiles.comResponse(res, 200, true, 'User List', arrFnsData)
  } catch (err) {
    // logger.debug(err)
    console.log(err)
  }
}
exports.logics = async (req, res) => {
  //
  const n = 3
  for (let i = 0; i < n; i++) {
    const arr = []
    for (let j = 0; j <= i; j++) {
      arr.push('*')
    }
    console.log(arr)
    console.log('\n')
  }
}
