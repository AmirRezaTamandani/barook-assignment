import { Store } from "@/types";
import { create } from "zustand";

export const useTodoStore = create<Store>((set, get) => ({
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
  loadTodos: () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    set({ todos: savedTodos });
  },
  saveTodos: () => {
    const todos = get().todos;
    localStorage.setItem("todos", JSON.stringify(todos));
  },
}));
