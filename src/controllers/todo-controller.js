import httpError from 'http-errors';
import ToDoService from '../services/todo-service';

class ToDoController {
  static addTodo = async ({ body }, res, next) => {
    const [error, todo] = await ToDoService.addToDo(body);
    if (error) return next(httpError.InternalServerError());
    return res.json(todo);
  };

  static findAllToDo = async ({ query }, res, next) => {
    const [error, todo] = await ToDoService.findAllToDo(query);
    if (error) return next(httpError.NotFound(`resource not found`));
    return res.json(todo);
  };

  static findToDoById = async ({ params }, res, next) => {
    const [error, todo] = await ToDoService.findToDoById(params.id);
    if (error || !todo) return next(this.setNotFoundError(params.id));
    return res.json(todo);
  };

  static updateToDoById = async ({ body, params }, res, next) => {
    const [error, todo] = await ToDoService.updateToDoById(params.id, body);
    if (error) return next(this.setNotFoundError(params.id));
    return res.json(todo);
  };

  static deleteToDoById = async ({ params }, res, next) => {
    const [error, todo] = await ToDoService.deleteToDoById(params.id);
    if (error) return next(this.setNotFoundError(params.id));
    return res.json(todo);
  };

  static setNotFoundError = (id) =>
    httpError.NotFound(`resource with id ${id} not found`);
}

export default ToDoController;
