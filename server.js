const express = require('express')
const db = require('./db/connect')
const bodyParser = require('body-parser')

const app = express()
//路由
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const userRouter = require('./router/userRouter')
const mailRouter = require('./router/mailRouter')
app.use('/user',userRouter)
app.use('/',mailRouter)


app.listen(3000,() => {
  console.log(`server is running on port:${3000}.`)
})