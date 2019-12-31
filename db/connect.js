// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/staff',{useNewUrlParser:true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',() => console.log('mongodb connect ok.'));