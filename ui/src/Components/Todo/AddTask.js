import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import "./AddTask.css";
import Dropdown from "./Dropdown";

export default function AddTask({ todos, setTodos, add, setAdd }) {
  const [showdd, setShowdd] = useState(false);
  const [showDeadlinedd, setShowDeadlinedd] = useState(false);
  const addTodo = (newTodo) => {
    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };
  //   console.log("todos:", todos);
  const [form, setForm] = useState({
    input: "",
    priority: "",
    deadline: "",
    user_id: "",
  });
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // do not display the form anymore
    setAdd(false);

    const { data } = await apiClient.addTask({
      input: form.input,
      priority: "3",
      deadline: "12:00",
      user_id: "",
    });
    console.log("the data:", data.newTask);
    if (data) {
      addTodo(data.newTask);
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
  }, [setTodos]);

  // if the form is called then display the form
  if (add) {
    return (
      <Grid className="taskSubmitForm">
        <Grid item>
          <Typography>Add Task</Typography>
        </Grid>
        <form className="todoInput">
          <Grid item>
            <TextField
              id="outlined-basic"
              name="input"
              variant="outlined"
              onChange={handleOnInputChange}
              value={form.input}
              fullWidth={true}
            />
          </Grid>
          <Grid
            className="formInputIcons"
            container
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Dropdown
              showdd={showdd}
              setShowdd={setShowdd}
              showDeadlinedd={showDeadlinedd}
            />
            <Grid item>
              <IconButton aria-label="priority">
                <PriorityHighIcon onClick={() => setShowdd((prev) => !prev)} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="deadline">
                <AccessAlarmIcon
                  onClick={() => setShowDeadlinedd((prev) => !prev)}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                onClick={() => console.log("Cancel")}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                onClick={handleOnSubmit}
                variant="contained"
                color="primary"
                disabled={!form}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  } else {
    return null;
  }
}
