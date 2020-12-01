const express = require('express')
const path = require('path')
const api = require('./routes/api')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })
app.use('/', api)
const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

