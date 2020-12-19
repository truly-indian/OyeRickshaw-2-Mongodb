const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const adminRoutes = require('./routes/index')
const mongoDb = require('connect-mongodb-session')(session)
const User = require('./models/user')
const app = express()

const SERVER_PORT = process.env.PORT || 3000



mongoose.connect(keys.mongoDb.dbUrl,
        { useNewUrlParser: true,  useUnifiedTopology: true  })
        .then(() => console.log('connected to mongodb...'))
        .catch(err => console.log(err))

const store = new mongoDb ({
  uri: keys.mongoDb.dbUrl,
  collection: 'sessions'
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({secret:'My secret' ,resave: false, saveUninitialized: false, store: store}))

app.use((req,res,next) => {
  if(!req.session.user) {
    return next()
  }
  User.findById({_id: req.session.user._id})
  .then((user) => {
       //console.log(user)
       req.user = user._id
       next();
  })
  .catch(err => {console.log(err)})
})

app.use('/', adminRoutes)

app.use('*', (req,res) => {
  res.status(404).json({message: "No such link"})
})

app.listen(SERVER_PORT, ()=> {
    console.log('server started successfully!!' + SERVER_PORT)
})