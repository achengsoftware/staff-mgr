const express = require('express')
const Mail = require('../utills/mail')
const MailCode = require('../db/model/authCodeModel')
const router = express.Router()

//发送邮件验证码
router.post('/sendMailCode',(req,res) => {
  let {mail} = req.body
  if(!mail) {return res.json({err:-1,msg:'参数错误'})}
  let code = parseInt(Math.random() * 10000)
  Mail.sendMail(mail,code)
  .then(() => {
    let parm ={
      mail,
      limit:1000*60*10,
      code,
      ctime:Date.now()
    }
    MailCode.remove({mail})
    .then(() => {
      MailCode.insertMany(parm)
    })
    .then( () => {
      res.json({err:0,msg:'验证码已发送到您的邮箱，请查收'})
    })
  })
  .catch(() =>{
    res.json({err:-1,msg:'验证码发送失败，请重试'})
  })
})

module.exports = router