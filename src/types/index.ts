export type todoStoreTypes = {
  id: string;
  text: string;
};
export type Store = {
  todo: todoStoreTypes[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  loadTodo: () => void;
  saveTodo: () => void;
};
export interface TodoItemProps {
  id: string;
  text: string;
}
