import { FormEvent, useContext, useState } from 'react';

import { Todo } from '@root/types/Todos';
import { TodoContext } from '@root/context/TodoContext';

import Layout from '@root/components/Layout';
import Button from '@root/components/Button';
import Todos from '@root/components/Todos';

export default function Home() {
  const { createTodo } = useContext(TodoContext);
  const [data, setData] = useState<Todo>({ title: '', completed: false });

  const handleInput = (e: FormEvent<HTMLInputElement>) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.title) return;

    createTodo({ ...data });
    setData({ title: '', completed: false });
  };

  return (
    <Layout>
      <div className="flex flex-row items-center">
        <div className="text-3xl font-bold text-gray-800">Todo App</div>
      </div>

      <div className="mt-14 space-y-3">
        <div className="text-xl text-gray-800 font-medium">Create Todo</div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            className="bg-white text-gray-500 w-full rounded-md px-6 py-3 focus:outline-none"
            name="title"
            type="text"
            autoComplete="off"
            value={data.title}
            onInput={handleInput}
          />

          <Button type="submit" variant="primary" fullWidth={true}>
            Create
          </Button>
        </form>
      </div>

      <Todos />
    </Layout>
  );
}
