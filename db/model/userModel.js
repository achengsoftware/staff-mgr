const mongoose = require('mongoose')

//创建Schema
let userSchema = new mongoose.Schema({
  us  : {type:String,required:true},//姓名
  ps  : {type:String,required:true},//密码
  card: {type:String,required:false},//身份证号
  hireDate:{type:String,required:false},//入职时间
  sex: {type:Number,default:0},//性别
  level: {type:Number,default:1},//等级
  phone: {type:String,default:''},
  age: {type:Number,default:0},
  email: {type:String,default:''},
  adress: {type:String,default:''},
}) 

//创建数据模型
let user = mongoose.model('users',userSchema)

module.exports = user