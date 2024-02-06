export type todoStoreTypes = {
  id: string;
  text: string;
};
export type Store = {
  todos: todoStoreTypes[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  loadTodos: () => void;
  saveTodos: () => void;
};
export interface TodoItemProps {
  id: string;
  text: string;
}
