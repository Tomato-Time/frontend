import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import Settings from "../Settings/Settings";
// import Todo from "../Todo/Todo";
import TodoForm from "../Todo/TodoForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background: "#292B3E",
    // border: "2px solid #fff", we don't want a border
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 30,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Settings
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TodoForm />
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
