import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        BackdropProps={{
          style: { backgroundColor: "rgba(255,255,255,0.00001)" },
        }}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          About us
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Pomodoro Technique is a time management method that focuses on
            periods of focus with frequent short breaks in between.
            <br />
            <br />
            1. Get a to-do list and a timer.
            <br />
            2. Set your timer for 25 minutes, and focus on a single task until
            the timer rings.
            <br />
            3. When your session ends, mark off one pomodoro and record what you
            completed.
            <br />
            4. Then enjoy a five-minute break.
            <br />
            5. After four pomodoros, take a longer, more restorative 15-30
            minute break.
            <br />
            <br />
            The technique works best when you: find small distractions derail
            the workday, have lots of open ended work that can take unlimited
            amounts of time, enjoy gamified goal-setting.
            <br />
            <br />
            It's biggest strength is in it's simplicity!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
