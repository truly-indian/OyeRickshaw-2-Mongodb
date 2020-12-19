const mongoose = require('mongoose')
const Todo = require('../models/todo')
const bcrypt = require('bcrypt')
const passport = require('passport')
const User = require('../models/user')

// Apis for authentication

exports.signUp = (req,res) => {
    const userEmail = req.body.email
     User.findOne({email: userEmail})
     .then((user) => {
         if(user) {
            res.status(404).json({message:"user exists"})
         }else {
            const newUser = new User({
                email: userEmail,
                password: req.body.password,
                name: req.body.name
            })
            bcrypt.hash(newUser.password, 10).then((hash) => {
                  newUser.password = hash
                   newUser.save()
                  .then((user) => {
                      res.status(200).json({message: "user saved successfully!!"})
                  })
                  .catch(err => console.log(err))
            });
         }
     })
     .catch(err => {
         console.log(err)
         res.status(400).json({message:'error occured..check developer console!!'})
    })
}

exports.signIn = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({email: email})
    .then((user) => {
       if(!user) {
            return res.status(400).json({message: 'email not exist!!'})
       }
       bcrypt.compare(password, user.password) 
       .then((doMatch) => {
               if(doMatch) {
                   req.session.isLoggedIn = true
                   req.session.user = user._id
                   return req.session.save(err => {
                       console.log(err)
                      res.status(200).json({message: 'logged in'})
                   })
               }
               res.status(400).json({message:'invalid password'})
       })
       .catch((err) => {
           res.status(400).json({message:'error occured check developer console!!'})
           console.log(err)
       })
    })
    .catch((err) => {
     console.log(err)
    })
}

exports.logout = (req,res) => {
     req.session.destroy((err) => {
         console.log(err)
         res.status(200).json({message: 'logged out!!'})
     })
}

// route for making a post request to add todo
exports.addTodo = async(req,res) => {
    var now = new Date(); 
    var str = now.toISOString();
    var result='';
    for(i=0;i<str.length;i++) {
        if(str[i]!='T') {
            result+=str[i];
        } else {
            break;
        }
    }
        try {
            const newTodo = {
                todoTitle: req.body.todoTitle,
                todoDetails: req.body.todoDetails,
                priority: req.body.priority,
                todoState: req.body.todoState,
                date: result,
                user: req.user
            }
            const createdTodo = await new Todo(newTodo).save()
            res.status(200).json(createdTodo)
        }catch(err) { 
            console.error(err)
            res.status(400).json({message:"bad request!!"})
            }
}

// route for making a get request to get all todos
exports.readTodos = (req,res) => {
     Todo.find({user: req.user})
     .sort({priority:'descending'})
     .then((todos)=> {
         console.log(todos)
        res.status(200).json({todos})
     })
     .catch((err) => {
         console.log(err)
         res.status(400).json({message:"error occured!! check console"})
     })
}

// route for making a update request to update todo
exports.updateTodo = (req,res) => {
    Todo.findById({_id: req.params.id})
    .then((todo) => {
         todo.todoTitle = req.body.todoTitle,
         todo.todoDetails = req.body.todoDetails,
         todo.priority = req.body.priority
         todo.todoState = req.body.todoState,
         todo.user = req.user
         todo.save()
         .then((todo) => {
           res.status(200).json({message:"Todo Updated successfully!!"})
         })
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({message:"error occured!! check console"})
    })
}

// route for making a delete request to delete a todo
exports.deleteTodo = (req,res) => {
   Todo.deleteOne({_id: req.user})
  .then(() => {
    res.status(200).json({message: "Todo deleted successfully!!"})
  })
  .catch((err) => {
    console.log(err)
    res.status(400).json({message:"error occured!! check console"})
  })
}

// all the search apis start from here

// search through title api
exports.searchTitle = (req,res) => {
     console.log(req.params.title)
     Todo.find({todoTitle: req.params.title})
     .then((todos) => {
          res.status(200).json(todos)
     })
     .catch((err) => {
         console.log(err)
         res.status(400).json({message:"error occured!! check developer console"})
     })
}

// search through date api
exports.searchDate = (req,res) => {
    console.log(req.params.date)
    Todo.find({date: req.params.date})
    .then((todos) => {
         res.status(200).json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({message:"error occured!! check developer console"})
    })
}

//search through priority

exports.searchPriority = (req,res) => {
    
    Todo.find({priority: req.params.priority})
    .sort({priority: 'descending'})
    .then((todos) => {
         res.status(200).json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({message:"error occured!! check developer console"})
    })
}

// search through state

exports.searchState = (req,res) => {
    
    Todo.find({todoState: req.params.state})
    .then((todos) => {
         res.status(200).json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({message:"error occured!! check developer console"})
    })
}