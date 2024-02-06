"use client";
import { useState } from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TodoItemProps } from "@/types";
import DoneIcon from "@mui/icons-material/Done";
import { useTodoStore } from "@/store/store";

const TodoItem: React.FC<TodoItemProps> = ({ id, text }) => {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(text);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleUpdate = () => {
    updateTodo(id, newText);
    setEditMode(false);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
      {editMode ? (
        <>
          <TextField
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
          />
          <IconButton onClick={handleUpdate}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography>{text}</Typography>
          <IconButton onClick={() => setEditMode(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default TodoItem;