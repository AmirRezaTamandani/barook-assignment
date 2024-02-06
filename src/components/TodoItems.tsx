"use client";
import React from "react";
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

  const updateHandler = () => {
    updateTodo(id, newText);
    setEditMode(false);
  };

  const removeHandler = () => {
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
          <IconButton onClick={() => setEditMode(true)} aria-label="Edit">
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography>{text}</Typography>
          <IconButton onClick={() => setEditMode(true)} aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton onClick={removeHandler} data-testid={`DeleteIcon-${id}`}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default TodoItem;
