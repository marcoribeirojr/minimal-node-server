'use strict'

const express = require('express')
let router = express.Router()

const UserModel = require('../models/user')
const routers = require('../routers/rootRouters')(UserModel)

routers.forEach((route, index) => {
  router[route.method](route.path, route.action)
})

module.exports = router
