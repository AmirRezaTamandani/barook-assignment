// store.test.ts
import { useTodoStore } from "@/store/store";
import { act } from "react-dom/test-utils";

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("useTodoStore", () => {
  it("should add a todo", () => {
    const { getState, addTodo } = useTodoStore();
    act(() => {
      addTodo("Test todo");
    });
    expect(getState().todos[0].text).toEqual("Test todo");
  });

  it("should remove a todo", () => {
    const { getState, addTodo, removeTodo } = useTodoStore();
    act(() => {
      addTodo("Test todo");
      removeTodo(getState().todos[0].id);
    });
    expect(getState().todos.length).toEqual(0);
  });

  it("should update a todo", () => {
    const { getState, addTodo, updateTodo } = useTodoStore();
    act(() => {
      addTodo("Test todo");
      updateTodo(getState().todos[0].id, "Updated todo");
    });
    expect(getState().todos[0].text).toEqual("Updated todo");
  });

  it("should load todos from localStorage", () => {
    localStorage.getItem.mockReturnValue(
      JSON.stringify([{ id: "1", text: "Loaded todo" }])
    );
    const { getState, loadTodos } = useTodoStore();
    act(() => {
      loadTodos();
    });
    expect(getState().todos[0].text).toEqual("Loaded todo");
  });

  it("should save todos to localStorage", () => {
    const { getState, addTodo, saveTodos } = useTodoStore();
    act(() => {
      addTodo("Test todo");
      saveTodos();
    });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "todos",
      JSON.stringify(getState().todos)
    );
  });
});
