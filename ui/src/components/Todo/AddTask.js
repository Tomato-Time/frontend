import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import "./AddTask.css";
import Dropdown from "./Dropdown";
import { TodoListContext } from "../../RoundContext";

export default function AddTask({ add, setAdd }) {
  const { setTodos } = useContext(TodoListContext);
  const [priority, setPriority] = useState(null);
  const [deadline, setDeadline] = useState(null);
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
      priority: priority,
      deadline: deadline,
      checked: false,
      user_id: "",
    });
    // console.log("the data:", data.newTask);
    if (data) {
      addTodo(data.newTask);
      // console.log("todos:", todos);
      // set to a blank form
      setForm({ input: "", priority: "", deadline: "", user_id: "" });
      // set the priority and deadline back to null
      setPriority(null);
      setDeadline(null);
      setForm({ input: "", priority: "", deadline: "", user_id: "" });
      // do not display menu drop downs
      setShowDeadlinedd(false);
      setShowdd(false);
    }
  };
  const handleCancelClick = () => {
    setAdd(false);
    // set to a blank form
    setForm({ input: "", priority: "", deadline: "", user_id: "" });
    // set the priority and deadline back to null
    setPriority(null);
    setDeadline(null);
    // do not display menu drop downs
    setShowDeadlinedd(false);
    setShowdd(false);
  };

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
              setShowDeadlinedd={setShowDeadlinedd}
              priority={priority}
              setPriority={setPriority}
              deadline={deadline}
              setDeadline={setDeadline}
            />
            <Grid item>
              <IconButton aria-label="priority">
                <PriorityHighIcon
                  onClick={() => {
                    setShowDeadlinedd(false);
                    setShowdd((prev) => !prev);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="deadline">
                <AccessAlarmIcon
                  onClick={() => {
                    setShowdd(false);
                    setShowDeadlinedd((prev) => !prev);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                onClick={handleCancelClick}
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
