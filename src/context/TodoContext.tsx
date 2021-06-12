import { FC, createContext, useState } from 'react';
import { Todo, TodoContextState } from '@root/types/Todos';

const TodoDefaultContext: TodoContextState = {
  todos: [],
  createTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
};

export const TodoContext = createContext<TodoContextState>(TodoDefaultContext);

const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState(TodoDefaultContext.todos);

  const createTodo = ({ title, completed = false }: Todo) => setTodos([...todos, { title, completed }]);
  const deleteTodo = (id: number) => setTodos(todos.filter((todo, index) => index !== id));
  const completeTodo = (id: number) => setTodos(todos.map((todo, index) => (index === id ? { ...todo, completed: !todo.completed } : todo)));

  return <TodoContext.Provider value={{ todos, createTodo, deleteTodo, completeTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
