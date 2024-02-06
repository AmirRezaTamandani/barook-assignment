import React from "react";
import { Card, CardContent } from "@mui/material";
import TodoList from "./TodoList";

const TodoCard: React.FC = () => {
  return (
    <Card elevation={3} className="w-full md:max-w-lg max-w-screen-lg">
      <CardContent>
        <TodoList />
      </CardContent>
    </Card>
  );
};

export default TodoCard;
