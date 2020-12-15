const router = require("express").Router();

const {addTodo, readTodos, updateTodo, deleteTodo,} = require('../controllers/index')
const {searchTitle, searchDate, searchPriority, searchState} = require('../controllers/index')

// add a todo (CREATE)
router.post('/todos', addTodo);

// get all todos (READ)
router.get('/todos', readTodos);

//update a todo (UPDATE)
router.put('/todos/:id', updateTodo);

//delete a todo (DELETE)
router.delete('/todos/:id', deleteTodo);

// search apis

router.get('/todo/title',searchTitle)
router.get('/todo/Date',searchDate)
router.get('/todo/priority',searchPriority)
router.get('/todo/state',searchState)


module.exports = router