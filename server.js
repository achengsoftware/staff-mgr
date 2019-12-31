const express = require('express')
const db = require('./db/connect')

const app = express()

app.listen(3000,() => {
  console.log('server start ok.')
})