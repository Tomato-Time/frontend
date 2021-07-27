import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import apiClient from "../../services/apiClient";

const useStyles = makeStyles({
  text: {
    textDecoration: (checked) => {
      if (checked) {
        return "line-through";
      }
      return "none";
    },
  },
});

export default function Todo({ todo, setTodos, edit }) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles(checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("i am checked", checked);
  };

  // delete a task
  const deleteTask = async (taskId) => {
    // make api call
    const { data } = await apiClient.deleteTask(taskId);
    console.log("the data from the api call", data);
    // setTodos
    // if (data) setTodos();
  };

  return (
    <List className="todoList">
      <ListItem>
        <ListItemIcon>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </ListItemIcon>
        <ListItemText
          className={classes.text}
          primary={todo.input}
          secondary={todo.priority}
        />
        {edit ? (
          <ListItemIcon>
            <IconButton onClick={() => deleteTask(todo.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
        ) : null}
      </ListItem>
    </List>
  );
}
