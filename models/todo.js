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
        type:Date,
        default:Date.now
    },
    priority:{
        type: Number,
        required:true
    }
})

const Todo = mongoose.model('todos' , todoSchema)
module.exports = Todo