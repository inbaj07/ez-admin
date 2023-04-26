const express = require('express')
const route = express.Router()
const user = require('./user_controller')
const userValidator = require('./user_validator')

route.get('/user/user_list', user.list)
route.get('/user/example_functions', user.exampleFunctions)
route.get('/user/logics', user.logics)
route.post('/user/user_add', userValidator.user, user.userAdd)
route.put('/user/user_edit', userValidator._id, userValidator.user, user.userEdit)

module.exports = route