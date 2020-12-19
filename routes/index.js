const router = require("express").Router();

const {addTodo, readTodos, updateTodo, deleteTodo,} = require('../controllers/index')
const {searchTitle, searchDate, searchPriority, searchState} = require('../controllers/index')
const {signUp, signIn,logout} = require('../controllers/index')
const isAuth = require('../middleware/isAuth')

// Authentication Apis

router.post('/signup', signUp);

router.post('/signin', signIn);

router.get('/logout',logout);
// add a todo (CREATE)

router.post('/todos',isAuth ,addTodo);

// get all todos (READ)
router.get('/todos',isAuth,readTodos);

//update a todo (UPDATE)
router.put('/todos/:id',isAuth ,updateTodo);

//delete a todo (DELETE)
router.delete('/todos/:id',isAuth ,deleteTodo);

// search apis

//search through title
router.get('/todos/search/title/:title',searchTitle)
//search through date
router.get('/todos/search/date/:date',searchDate)
//search through priority
router.get('/todos/search/priority/:priority',searchPriority)
//search through state
router.get('/todos/search/state/:state',searchState)



module.exports = router