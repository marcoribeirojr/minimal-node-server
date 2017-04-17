'use strict'

const mongoose = require('mongoose')
const User = require('../schemas/user')
const UserModel = mongoose.model('User', User)

module.exports = UserModel
