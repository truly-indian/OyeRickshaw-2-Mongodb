const router = require("express").Router();

const {addTodo, readTodos, updateTodo, deleteTodo} = require('../controllers/index')


// add a todo (CREATE)
router.post('/todos', addTodo);

// get all todos (READ)
router.get('/todos', readTodos);

//update a todo (UPDATE)
router.put('/todos/:id', updateTodo);

//delete a todo (DELETE)
router.delete('/todos/:id', deleteTodo);

module.exports = router