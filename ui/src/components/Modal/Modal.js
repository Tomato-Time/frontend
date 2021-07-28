import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Settings from "../Settings/Settings";
// import Todo from "../Todo/Todo";
import TodoForm from "../Todo/TodoForm";
import DraggableDialog from "../AboutUs/aboutUs";
import Calendar from "../Calendar/calendar";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalRoot: {
    background: "rgba(255,255,255,0.2)",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background: "#292B3E",
    overflow: "scroll",
    height: "400px",
    width: "500px",
    // border: "2px solid #fff", we don't want a border
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 30,
  },
}));

export default function TransitionsModal({ openModal, setOpenModal, text }) {
  const classes = useStyles();

  const handleModalClose = () => {
    console.log("handle modal close");
    setOpenModal(false);
    console.log("openModal", openModal);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      // BackdropProps={{
      //   timeout: 500,
      //   root: classes.modalRoot
      // }}
      BackdropProps={{
        style: { backgroundColor: "rgba(255,255,255,0.00001)" },
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          {/* <TodoForm /> */}
          <Settings />
          {console.log(text)}
          {/* <DraggableDialog/> */}
          {/* <Calendar /> */}
        </div>
      </Fade>
    </Modal>
  );
}
