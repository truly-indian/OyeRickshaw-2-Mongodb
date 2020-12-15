const mongoose = require('mongoose')
const Todo = require('../models/todo')


// route for making a post request to add todo
exports.addTodo = async(req,res) => {

        try {
            const newTodo = {
                todoTitle: req.body.todoTitle,
                todoDetails: req.body.todoDetails,
                priority: req.body.priority,
                todoState: req.body.todoState
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
     Todo.find()
     .then((todos)=> {
        res.status(200).json(todos)
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
         todo.todoState = req.body.todoState
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
   Todo.deleteOne({_id: req.params.id})
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
     const {todoTitle} = req.body
     Todo.find({todoTitle: todoTitle})
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
    const {date} = req.body
    Todo.find({date: date})
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
    const {priority} = req.body
    Todo.find({priority: priority})
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
    const {todoState} = req.body
    Todo.find({todoState: todoState})
    .then((todos) => {
         res.status(200).json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({message:"error occured!! check developer console"})
    })
}