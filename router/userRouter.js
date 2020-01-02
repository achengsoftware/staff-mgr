const express = require("express")
const router = express.Router()
const User = require('../db/model/userModel')
const MailCode = require('../db/model/authCodeModel')
const Err = require('../utills/errinfo')

/**
 * @api {post} /user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {Number} us 用户名
 * @apiParam {Number} ps 密码
 * @apiParam {Number} code 验证码
 * @apiParam {String} mail 邮箱地址
 *
 * @apiSuccess {String} err 0
 */
router.post('/reg',(req,res) =>{
  let {us,ps,code,mail} = req.body
  if(us && ps && code && mail){
    //验证验证码是否有效
    MailCode.find({mail})
    .then( codeObj =>{
      if(codeObj.length === 0)  return res.json({err:-5,msg:'无效的邮箱地址'})
      if(codeObj[0].code !== code) return res.json({err:-6,msg:'验证码无效，请重试'})
      if(Date.now() > (codeObj[0].ctime+codeObj[0].limit)) return res.json({err:-7,msg:'验证码过期，请重新获取验证码'})
      User.find({us})
      .then(data => {
        if(data.length>0){
          return res.json(Err.getErr(-4))
        }else{
          User.insertMany({us,ps,email:mail})
          .then( data => {
            res.json({ err : 0,msg:'reg ok.'
            })
          })
          .catch( () => res.json(Err.getErr(-2)))
        }
      })
    })
  }else{
    res.json(Err.getErr(-1))
  }
})


/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {Number} us 用户名
 * @apiParam {Number} ps 密码
 *
 * @apiSuccess {String} err 0
 */
router.post('/login',(req,res) => {
  let {us,ps} = req.body
  if(!ps || !us){res.json(Err.getErr(-1))}
  User.find({us,ps})
  .then(data => {
    if(data.length>0){
      res.json({err:0,msg:'Login ok.'})
    }else{
      res.json(Err.getErr(-3))
    }
  })
  .catch(err => res.json(Err.getErr(-2)))
})
module.exports = router