import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoForm.css";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import AddTask from "./AddTask";

export default function TodoForm({ user }) {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

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
          <IconButton aria-label="edit">
            <EditIcon onClick={() => setEdit((prev) => !prev)} />
          </IconButton>
        </div>
      </div>
      {/* if add is true we want to just show the form and once submitted 
      show the list  */}
      <AddTask todos={todos} setTodos={setTodos} add={add} setAdd={setAdd} />
      <div className="todoItemSection">
        <ul className="todoItems">
          {todos?.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
