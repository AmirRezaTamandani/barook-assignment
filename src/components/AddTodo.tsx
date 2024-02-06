"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useTodoStore } from "@/store/store";

const AddTodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Hire AmirReza"
        variant="outlined"
        style={{ overflowWrap: "break-word" }}
        size="small"
        fullWidth
        autoComplete="off"
        multiline
        maxRows={4}
        margin="dense"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        fullWidth
      >
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodoForm;
