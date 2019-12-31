const errInfo ={
  '-1': '参数错误',
  '-2': '服务器错误'
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