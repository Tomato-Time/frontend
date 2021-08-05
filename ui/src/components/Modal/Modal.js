import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import VariousModals from "./VariousModals";

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

export default function TransitionsModal({ openModal, setOpenModal }) {
  const classes = useStyles();

  const handleModalClose = () => {
    setOpenModal(false);
    console.log("modal was closed");
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
      BackdropProps={{
        style: { backgroundColor: "rgba(255,255,255,0.00001)" },
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          <VariousModals openModal={openModal} />
        </div>
      </Fade>
    </Modal>
  );
}
