"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useTodoStore } from "@/store/store";

const AddTodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(!e.target.value.trim());
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      setError(true);
    } else {
      addTodo(inputValue);
      setInputValue("");
      setError(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined"
        size="small"
        fullWidth
        autoComplete="off"
        multiline
        maxRows={4}
        margin="dense"
        error={error}
        helperText={error ? "please write a Todo" : ""}
        placeholder="Hire AmirReza"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        fullWidth
      >
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
