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

router.get('/todos/search/title/:title',searchTitle)
router.get('/todos/search/date/:Date',searchDate)
router.get('/todos/search/priority/:priority',searchPriority)
router.get('/todos/search/state/:state',searchState)


module.exports = router