"use client";
import { useState } from "react";
import { Typography, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { TodoItemProps } from "@/types";
import { useTodoStore } from "@/store/store";

const TodoItem: React.FC<TodoItemProps> = ({ id, text }) => {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(text);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const updateHandler = () => {
    updateTodo(id, newText);
    setEditMode(false);
  };

  const removeHandler = () => {
    removeTodo(id);
  };

  return (
    <div className="flex items-center justify-between mt-2 flex-row flex-no-wrap ">
      {editMode ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
          fullWidth
          multiline
          size="small"
        />
      ) : (
        <Typography className="flex-1 overflow-wrap break-word break-all mr-2">
          {text}
        </Typography>
      )}
      <div className="flex items-center space-x-1">
        {editMode ? (
          <IconButton onClick={updateHandler}>
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setEditMode(true)}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={removeHandler}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
