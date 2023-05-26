const express = require('express')
const route = express.Router()
const practice = require('./practice_controller')

route.get('/nodeJS', practice.NodeJSPractice)
route.get('/readFileAsync', practice.readFileAsync)
route.get('/readFileSynchronize', practice.readFileSynchronize)
route.get('/forEachAsync', practice.forEachAsync)

module.exports = route
