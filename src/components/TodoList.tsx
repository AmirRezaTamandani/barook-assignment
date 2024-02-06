"use client";
import { useTodoStore } from "@/store/store";
import AddTodoForm from "./AddTodo";
import TodoItem from "./TodoItems";
import { useEffect } from "react";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const loadTodos = useTodoStore((state) => state.loadTodos);
  const saveTodos = useTodoStore((state) => state.saveTodos);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  return (
    <div>
      <AddTodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
