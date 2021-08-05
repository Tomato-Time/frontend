import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoForm.css";
import AddIcon from "@material-ui/icons/Add";
import AddTask from "./AddTask";
import apiClient from "../../services/apiClient";

export default function TodoForm({ user }) {
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState(false);

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
  }, [setTodos]);
  return (
    <div className="todoForm">
      <div className="todoIcons">
        <div className="todoTitle">
          <h2>Todo List</h2>
        </div>
        <div className="todoButtons">
          <IconButton aria-label="add">
            <AddIcon onClick={() => setAdd((prev) => !prev)} />
          </IconButton>
        </div>
      </div>
      {/* if add is true we want to just show the form and once submitted 
      show the list  */}
      <AddTask todos={todos} setTodos={setTodos} add={add} setAdd={setAdd} />
      <div className="todoItemSection">
        <ul className="todoItems">
          {todos?.map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
}
