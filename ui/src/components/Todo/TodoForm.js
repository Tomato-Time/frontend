import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoForm.css";
import apiClient from "../../services/apiClient";

export default function TodoForm({ user }) {
  const [todos, setTodos] = useState([1, 2]);
  const addTodo = (newTodo) => {
    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };
  console.log("todos:", todos);
  // const [input, setInput] = useState("");
  const [form, setForm] = useState({
    input: "",
    priority: "",
    deadline: "",
    user_id: "",
  });
  // console.log('🔫"', form);
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await apiClient.addTask({
      input: form.input,
      priority: "3",
      deadline: "12:00",
      user_id: "",
    });
    console.log("the data:", data.newTask);
    if (data) {
      addTodo(data.newTask.input);
      console.log("todos:", todos);
      // set to a blank form
      setForm({ input: "", priority: "3", deadline: "12:00", user_id: "" });
    }
  };
  // fetch new todos as they get added
  useEffect(() => {
    const fetchTasks = async () => {
      // make api call
      const { data } = await apiClient.listTodos();
      console.log("the data from the api call", data);
      // setTodos
      if (data) setTodos(data.getTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div className="todoForm">
      <h1>Today's Tasks</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            name="input"
            value={form.input}
            onChange={handleOnInputChange}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={handleOnSubmit}
          variant="contained"
          color="primary"
          disabled={!form}
        >
          Add
        </Button>
      </form>
      <div className="todoItemSection">
        <ul className="todoItems">
          {todos?.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
