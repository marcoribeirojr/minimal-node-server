'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = {
     name : require('../fields/name')
  ,  email : require('../fields/email')
  ,  password : require('../fields/password')
  ,  createdAt :  require('../fields/createdAt')
}

module.exports = new Schema(User)
