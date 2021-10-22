import ToDo from '../models/todo'
import { promisseHandler } from '../utils/promisse-handler'

class ToDoController {
  static addTodo = async (request, response) => {
    try {
      const newUser = await ToDo.create(request.body)
      response.status(200).json(newUser)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  static findAllTodo = async (_, response) => {
    return await ToDo.find({})
      .then((data) => response.status(200).json(data))
      .catch((error) => response.status(500).send(error))
  }

  static findTodoById = async ({ params }, response) => {
    const { id: _id } = params
    const [error, data] = await promisseHandler(ToDo.find({ _id }))
    if (error) {
      return response.status(500).send(error)
    }
    return response.status(200).send(data)
  }
}

export default ToDoController
