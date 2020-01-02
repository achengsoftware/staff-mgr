"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user:'1293163286@qq.com',
    pass: 'qsvbtunalupfghjc' // generated ethereal password
  }
});
  
let sendMail = (emailAdress,code) => {
  return new Promise((resolve,reject) =>{
    let mailObj = {
      from: '"阿成软件" <1293163286@qq.com>',
      to: emailAdress, 
      subject: "新用户验证码提醒", 
      text: `您的注册验证码是${code}，有效期是5分钟`
    }
    transporter.sendMail(mailObj,(err,data) =>{
      if(!err){
        resolve()
      }else{
        reject()
      }
    })
  })
}

module.exports = {sendMail}


 

