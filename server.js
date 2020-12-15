const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const adminRoutes = require('./routes/index')
const app = express()

const SERVER_PORT = process.env.PORT || 3000


mongoose.connect(keys.mongoDb.dbUrl,
        { useNewUrlParser: true,  useUnifiedTopology: true  })
        .then(() => console.log('connected to mongodb...'))
        .catch(err => console.log(err))

        app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', adminRoutes)



app.listen(SERVER_PORT, ()=> {
    console.log('server started successfully!!' + SERVER_PORT)
})