import { Grid, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // to set the width of the dropdown
    minWidth: 120,
  },
}));
export default function Dropdown({ showdd, setShowdd, showDeadlinedd }) {
  const classes = useStyles();
  const [priority, setPriority] = useState(0);
  const [deadline, setDeadline] = useState("12:00");

  // drop down selection for priority
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };
  // if dropdown should be displayed
  if (showdd) {
    return (
      <Grid item className={classes.formControl}>
        <Select
          labelId="select-priority"
          id="select-priority"
          value={priority}
          fullWidth={true}
          onChange={handlePriorityChange}
          displayEmpty
          labelWidth={6}
        >
          <MenuItem value="" disabled>
            Priority
          </MenuItem>
          <MenuItem value={1}>🔥</MenuItem>
          <MenuItem value={2}>🔥 🔥</MenuItem>
          <MenuItem value={3}>🔥 🔥 🔥</MenuItem>
        </Select>
      </Grid>
    );
  }
  if (showDeadlinedd) {
    // make sure the priority dropdown does not display
    setShowdd(false);
    return (
      <Grid item className={classes.formControl}>
        <Select
          labelId="select-priority"
          id="select-priority"
          value={deadline}
          fullWidth={true}
          onChange={handleDeadlineChange}
          displayEmpty
          labelWidth={6}
        >
          <MenuItem value="" disabled>
            Deadline
          </MenuItem>
          <MenuItem value={1}>noon</MenuItem>
          <MenuItem value={2}>1</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </Grid>
    );
  } else {
    return null;
  }
}
