import {
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import "./Todo.css";

const useStyles = makeStyles({
  text: {
    textDecoration: (checked) => {
      if (checked) {
        return "line-through";
      }
      return "none";
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: "middle",
    fontSize: "20px",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    verticalAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  checkbox: {
    verticalAlign: "middle",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background: "#292B3E",
    flexGrow: 1,
  },
  fire: {
    fontSize: 14,
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function Todo({ todo, setTodos }) {
  const [checked, setChecked] = useState(todo.checked || false);
  // const [completed, setCompleted] = useState([]);
  const classes = useStyles(checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    todo.checked = event.target.checked;
  };
  const deleteTodoItem = (deleted) => {
    setTodos((oldTodos) => oldTodos.filter((input) => input.id !== deleted.id));
  };

  const handleOnDelete = async (taskId) => {
    const { data } = await apiClient.deleteTask(taskId);
    console.log(data);
    deleteTodoItem(data.deletedTask);
  };
  const hour = parseInt(String(todo.deadline).slice(0, 2));
  const formatHour = hour % 12;
  const minutes = String(todo.deadline).slice(2, 5);
  const morningOrNight = () => {
    if (hour > 12) return " PM";
    else return " AM";
  };

  return (
    <List className="todoList">
      <ListItem>
        <ListItemIcon className={classes.checkbox}>
          <Checkbox
            value={todo.id}
            color="primary"
            checked={checked}
            style={{
              color: "#36B4F5",
            }}
            onChange={(e) => handleChange(e)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </ListItemIcon>

        <ListItemText
          alignItems="flex-start"
          className={classes.text}
          primary={todo.input}
          secondary={
            <React.Fragment>
              <Typography
                className="deadline-input"
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {todo.priority ? "priority: " + String(todo.priority) : null}
                <br />
                {todo.deadline
                  ? "deadline: " + formatHour + minutes + morningOrNight()
                  : null}
              </Typography>
            </React.Fragment>
          }
        />

        <ListItemIcon>
          <IconButton
            onClick={() => handleOnDelete(todo.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </List>
  );
}
