"use client";
import { useTodoStore } from "@/store/store";
import AddTodoForm from "./AddTodo";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

const TodoList = () => {
  const todo = useTodoStore((state) => state.todo);
  const loadTodo = useTodoStore((state) => state.loadTodo);
  const saveTodo = useTodoStore((state) => state.saveTodo);

  useEffect(() => {
    loadTodo();
  }, []);

  useEffect(() => {
    saveTodo();
  }, [todo]);

  return (
    <div>
      <AddTodoForm />
      {todo.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
