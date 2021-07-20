import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoForm.css";

export default function TodoForm() {
  const [todos, setTodos] = useState([
    "walk the dog",
    "go for a run",
    "prep dinner",
  ]);
  const [input, setInput] = useState("");
  console.log('🔫"', input);

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
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
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
          +
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
