import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import VariousModals from "./VariousModals";
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import "./Modal.css";

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
    height: "450px",
    width: "525px",
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

    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: { backgroundColor: "rgba(41,43,62,0.7)" },
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          <div className="close-button">
          {/* <Button>
            X
          </Button> */}
          <IconButton>
            <CloseIcon
             onClick = {handleModalClose}
           />
          </IconButton>
          </div>
          <VariousModals openModal={openModal} />
        </div>
      </Fade>
    </Modal>
    </div>
    
  );
}
