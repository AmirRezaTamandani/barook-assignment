import { Store } from "@/types";
import { create } from "zustand";

export const useTodoStore = create<Store>((set, get) => ({
  todo: [],
  addTodo: (text) =>
    set((state) => ({
      todo: [...state.todo, { id: Date.now().toString(), text }],
    })),
  removeTodo: (id) =>
    set((state) => ({ todo: state.todo.filter((todo) => todo.id !== id) })),
  updateTodo: (id, text) =>
    set((state) => ({
      todo: state.todo.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    })),
  loadTodo: () => {
    const savedTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    set({ todo: savedTodos });
  },
  saveTodo: () => {
    const todo = get().todo;
    localStorage.setItem("todo", JSON.stringify(todo));
  },
}));
