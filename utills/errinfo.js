const errInfo ={
  '-1': '参数错误',
  '-2': '服务器错误',
  '-3': '用户名或密码错误',
  '-4': '用户名已经存在'
}
const getErrInfo = (err) =>{
  return {
    err,
    msg:errInfo[err]
  }
}
module.exports = {
  getErr:getErrInfo
}