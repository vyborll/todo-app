export type TodoContextState = {
  todos: Todo[];
  createTodo: ({ title, completed }: { title: string; completed: boolean }) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
};

export interface Todo {
  title: string;
  completed: boolean;
}
