'use strict'

const email = {
    type : String
  , validate : require('../validate_functions/isValidEmail')
  , required : true
  , index : {unique : true}
}

module.exports = email
