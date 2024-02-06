import React from "react";
import { Card, CardContent } from "@mui/material";
import TodoList from "./TodoList";

const TodoCard: React.FC = () => {
  return (
    <Card elevation={3}>
      <CardContent>
        <TodoList />
      </CardContent>
    </Card>
  );
};

export default TodoCard;
