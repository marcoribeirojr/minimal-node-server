'use strict'

const password = {
    type : String
  , validate : require('../validate_functions/isValidPassword')
  , required : true
}

module.exports = password
