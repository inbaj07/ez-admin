const express = require('express')
const route = express.Router()
const tools = require('./tools_controller')

route.post('/youtube-download', tools.youTubeDownload)

module.exports = route
