// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/staff',{useNewUrlParser:true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',() => console.log('mongodb connect ok.'));

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
let user = mongoose.model('user',userSchema)

//插入数据库
user.insertMany({
  us : 'admin',
  ps :'123456',
  card : '61240119890228521x',
  hireDate : Date.now(),
  sex : 1,
  level : 3,
  phone : '15829282355',
  age: 30,
  email: 'chengcaiyi@qq.com',
  adress: '陕西省西安市新城区建工路'
})
.then( data => {
  console.log(data,'Insert data ok.')
})
.catch( err => {
  console.log(err)
})