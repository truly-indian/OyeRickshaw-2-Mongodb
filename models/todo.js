const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    todoTitle:{
        type:String,
        required:true
    },
    todoDetails:{
        type:String,
        required:true,
    },
    date:{
        type:String
    },
    priority:{
        type: Number,
        required:true
    },
    todoState :{
        type: Boolean,
        default: false
    },
    user: {
        type: String
    }
})

const Todo = mongoose.model('todos' , todoSchema)
module.exports = Todo