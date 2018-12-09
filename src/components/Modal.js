import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

const styles = {
  overflow: {
    overflowY: "visible"
  }
};

const Modal = ({
  open,
  close,
  onEnter,
  title,
  content,
  actions,
  maxWidth,
  classes,
  fullScreen
}) => (
  <Dialog
    fullScreen={fullScreen}
    fullWidth
    maxWidth={maxWidth}
    open={open}
    onClose={close}
    aria-labelledby={`${title}-dialog`}
    onEnter={onEnter}
    classes={{ paper: classes.overflow }}
  >
    <DialogTitle id="edit-goal-dialog">{title}</DialogTitle>
    <DialogContent className={classes.overflow}>{content}</DialogContent>
    {actions}
  </Dialog>
);

const MobileModal = withMobileDialog({ breakpoint: "xs" })(Modal);

export default withStyles(styles)(MobileModal);
