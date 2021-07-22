import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoForm.css";

export default function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log('🔫"', input);

  // fetch new todos as they get added
  useEffect(() => {
    // make api call
    const { data } = await apiClient.listTodos();
    console.log(data);
    // setTodos
    if (data) setTodos(data.todos);
  }, [input]);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    console.log("I'm working");
    setTodos([...todos, input]);
    setInput(""); // clear the input after submit
  };

  return (
    <div className="todoForm">
      <h1>Today's Tasks</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add
        </Button>
      </form>
      <div className="todoItemSection">
        <ul className="todoItems">
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
