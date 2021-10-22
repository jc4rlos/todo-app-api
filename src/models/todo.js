import { model, Schema } from 'mongoose';

const ToDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#dddd',
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const ToDo = model('todo', ToDoSchema);

export default ToDo;
