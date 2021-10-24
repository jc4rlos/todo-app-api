import ToDo from '../models/entity/todo';
import { promisseHandler } from '../utils/promisse-handler';

class ToDoService {
  static addToDo = async (todo) => promisseHandler(ToDo.create(todo));

  static findToDoById = async (_id) =>
    promisseHandler(ToDo.findOne({ _id }).lean());

  static findAllToDoOne = async (page, size) => {
    const skip = (page - 1) * size;
    return promisseHandler(
      ToDo.find({}).select(['-createdAt', '-updatedAt']).skip(skip).limit(size)
    );
  };

  static findAllToDo = async (body) => {
    const { page = 0, size = 5, title = '', showDone = false } = body;
    const done = [false];
    if (showDone) done.push(true);
    return promisseHandler(
      ToDo.paginate(
        { title: new RegExp(title, 'i'), done: { $in: done } },
        {
          select: '-createdAt -updatedAt',
          offset: page,
          limit: size,
          lean: true,
        }
      )
    );
  };

  static updateToDoById = (_id, body) =>
    promisseHandler(ToDo.updateOne({ _id }, { $set: body }).lean());

  static deleteToDoById = (_id) =>
    promisseHandler(ToDo.deleteOne({ _id }).lean());
}

export default ToDoService;
