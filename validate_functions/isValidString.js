'use strict'

const string = (value) => {

  const onlyLetters = /[a-zA-Z]+/g.test(value)
  const isNull = (value === null)
  const isUndefined = (value === undefined)
  const isEmpty = (value === '')

  if(onlyLetters || isNull || isUndefined || isEmpty){
    return true
  }
  return false
}

module.exports = string
