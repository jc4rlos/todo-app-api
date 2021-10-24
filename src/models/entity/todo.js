import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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
    timestamps: true,
  }
);

ToDoSchema.plugin(mongoosePaginate);

const ToDo = model('todo', ToDoSchema);

export default ToDo;
