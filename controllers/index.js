const mongoose = require('mongoose')
const Todo = require('../models/todo')


// post route api 
exports.addTodo = async(req,res) => {

        try {
            const newTodo = {
                todoTitle: req.body.todoTitle,
                todoDetails: req.body.todoDetails,
                priority: req.body.priority
            }
            const createdTodo = await new Todo(newTodo).save()
            res.status(200).json(createdTodo)
        }catch(err) { 
            console.error(err)
            res.status(400).json({message:"bad request!!"})
            }
}

// read todo api
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

//update todo api
exports.updateTodo = (req,res) => {
    Todo.findById({_id: req.params.id})
    .then((todo) => {
         todo.todoTitle = req.body.todoTitle,
         todo.todoDetails = req.body.todoDetails,
         todo.priority = req.body.priority
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

// delete todo  api 
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