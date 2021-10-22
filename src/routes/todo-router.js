import routerx from 'express-promise-router'
import ToDoController from '../controllers/todo-controller'

const toDoRouter = routerx()

toDoRouter.post('/', ToDoController.addTodo)
toDoRouter.get('/', ToDoController.findAllTodo)
toDoRouter.get('/:id', ToDoController.findTodoById)

export default toDoRouter
