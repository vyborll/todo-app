import { FC, useContext } from 'react';
import clsx from 'clsx';

import { TodoContext } from '@root/context/TodoContext';
import Button from '@root/components/Button';

const Todos: FC = () => {
  const { todos, deleteTodo, completeTodo } = useContext(TodoContext);

  const handleClick = (id: number) => deleteTodo(id);
  const handleComplete = (id: number) => completeTodo(id);

  return (
    <div className="mt-10 space-y-3">
      {todos.map((todo, i) => (
        <div className="flex flex-row items-center justify-between bg-gray-100 p-4 rounded-md w-full" key={i}>
          <div className="flex flex-row items-center">
            <input
              className="h-6 w-6 border-gray-300 rounded-md mr-3"
              name="completed"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(i)}
            />
            <p className={clsx('text-xl', { 'line-through font-bold': !!todo.completed })}>{todo.title}</p>
          </div>
          <Button variant="danger" fullWidth={false} onClick={() => handleClick(i)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
