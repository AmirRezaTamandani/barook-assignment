import React from "react";
import { Card, CardContent } from "@mui/material";
import TodoList from "./TodoList";

const TodoCard: React.FC = () => {
  return (
    <Card
      elevation={3}
      className="w-screen md:max-w-lg max-w-screen-sm max-h-screen"
    >
      <CardContent>
        <TodoList />
      </CardContent>
    </Card>
  );
};

export default TodoCard;
