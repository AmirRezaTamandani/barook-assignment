import { create } from "zustand";

type Store = {
  todos: todoTypes[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};
//TODO: expand upon the store logic if needed
export const useStore = create<Store>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now().toString(), text }],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    })),
}));
