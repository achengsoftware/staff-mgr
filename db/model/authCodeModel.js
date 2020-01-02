const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  code:String,
  limit:Number,
  ctime:Number,
  mail:String
})

let auth = mongoose.model('codes',schema)
module.exports = auth