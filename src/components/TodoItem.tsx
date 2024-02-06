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

  const updateHandler = () => {
    updateTodo(id, newText);
    setEditMode(false);
  };

  const removeHandler = () => {
    removeTodo(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 2,
        flexDirection: "row",
      }}
    >
      {editMode ? (
        <>
          <TextField
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
            multiline
            autoComplete="off"
            fullWidth
          />
          <IconButton onClick={updateHandler}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            sx={{ overflowWrap: "break-word", wordBreak: "break-word" }}
          >
            {text}
          </Typography>
          <div>
            <IconButton onClick={() => setEditMode(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={removeHandler}>
              <DeleteIcon />
            </IconButton>
          </div>
        </>
      )}
    </Box>
  );
};

export default TodoItem;
