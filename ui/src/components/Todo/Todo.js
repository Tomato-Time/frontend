import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";

// import "./Todo.css";

export default function Todo({ todo }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
        <ListItemText primary={todo} secondary="priority" />
      </ListItem>
    </List>
  );
}
