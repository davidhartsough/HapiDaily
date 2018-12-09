import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Modal from "../../components/Modal";

export default class AddPersonDialog extends React.Component {
  state = {
    name: ""
  };

  handleTextChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.save();
    }
  };

  save = () => {
    const { name } = this.state;
    if (name.length > 0) {
      this.props.save(name);
    }
    this.setState({ name: "" });
  };

  render() {
    const { open, close } = this.props;
    const { name } = this.state;
    return (
      <Modal
        open={open}
        close={close}
        onEnter={this.updateState}
        title="Add a person"
        maxWidth="xs"
        content={
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={name}
            onChange={this.handleTextChange}
            onKeyDown={this.handleKeyDown}
            fullWidth
          />
        }
        actions={
          <DialogActions>
            <Button onClick={close}>Cancel</Button>
            <Button onClick={this.save} color="primary">
              Save
            </Button>
          </DialogActions>
        }
      />
    );
  }
}
