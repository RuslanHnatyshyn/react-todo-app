import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 887;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, { title, userId, completed });
};

export const deleteTodo = (todoID: number) => {
  return client.delete(`/todos/${todoID}`);
};

export const updateTodo = ({ id, ...todo }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, todo);
};
