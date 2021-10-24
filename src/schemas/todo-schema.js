import { string, object } from 'yup';

const toDoSchema = object().shape({
  title: string().nullable().required(),
  description: string().nullable().required(),
});

export default toDoSchema;
