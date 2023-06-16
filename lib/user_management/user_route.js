const express = require('express')
const route = express.Router()
const user = require('./user_controller')
const userValidator = require('./user_validator')

route.get('/userDetails/:id', user.listByID)
route.get('/user_list', user.list)
route.get('/NodeJSPractice', user.NodeJSPractice)
route.get('/logics', user.logics)
route.post('/user_add', userValidator.user, user.userAdd)
route.put('/user_edit', userValidator._id, userValidator.user, user.userEdit)
route.post('/login', user.login);
route.post('/verifyToken', user.verifyToken);

module.exports = route
