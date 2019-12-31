//创建Schema
let userSchema = new mongoose.Schema({
  us  : {type:String,required:true},//姓名
  ps  : {type:String,required:false},//密码
  card: {type:String,required:true},//身份证号
  hireDate:{type:String,required:true},//入职时间
  sex: {type:String,default:0},//性别
  level: Number,//等级
  phone: String,
  age: String,
  email: String,
  adress: String,
}) 

//创建数据模型
let user = mongoose.model('users',userSchema)

module.exports = user