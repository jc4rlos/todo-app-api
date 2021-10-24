import routerx from 'express-promise-router';
import ToDoController from '../controllers/todo-controller';
import { validateMidleware } from '../middleware';
import toDoSchema from '../schemas/todo-schema';

const toDoRouter = routerx();

toDoRouter.post('/', validateMidleware(toDoSchema), ToDoController.addTodo);
toDoRouter.get('/', ToDoController.findAllToDo);
toDoRouter.get('/:id', ToDoController.findToDoById);
toDoRouter.put(
  '/:id',
  validateMidleware(toDoSchema),
  ToDoController.updateToDoById
);
toDoRouter.delete('/:id', ToDoController.deleteToDoById);

export default toDoRouter;
