import {
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
// import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // to set the width of the dropdown
    minWidth: 120,
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 110,
  },
}));
export default function Dropdown({
  showdd,
  setShowdd,
  showDeadlinedd,
  setShowDeadlinedd,
  priority,
  setPriority,
  deadline,
  setDeadline,
}) {
  const classes = useStyles();

  // drop down selection for priority
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };
  // if dropdown should be displayed
  if (showdd) {
    // setShowDeadlinedd(false);
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
    // setShowdd(false);
    return (
      <Grid item className={classes.formControl}>
        <TextField
          id="time"
          type="time"
          defaultValue="07:30"
          value={deadline}
          onChange={handleDeadlineChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
    );
  } else {
    return null;
  }
}
