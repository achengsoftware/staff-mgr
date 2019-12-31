const express = require("express")
const router = express.Router()
const User = require('../db/model/userModel')
const Err = require('../utills/errinfo')

/**
 * @api {post} /user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {Number} us 用户名
 * @apiParam {Number} ps 密码
 * @apiParam {Number} code 验证码
 *
 * @apiSuccess {String} err 0
 */
router.post('/reg',(req,res) =>{
  let {us,ps} = req.body
  if(us && ps){
    User.insertMany({us,ps})
    .then( data => {
      res.json({ err : 0,msg:'reg ok.'
      })
    })
    .catch( () => res.json(Err.getErr(-2)))
  }else{
    res.json(Err.getErr(-1))
  }
})

module.exports = router