import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Modal from "../../components/Modal";

export default class EditPersonDialog extends React.Component {
  state = {
    name: "",
    error: false
  };

  updateState = () => {
    const { name } = this.props;
    this.setState({ name });
  };

  handleTextChange = ({ target }) => {
    const name = target.value;
    this.setState({ name, error: name.length < 1 });
  };

  handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.save();
    }
  };

  save = () => {
    const { name, error } = this.state;
    if (!error) {
      this.props.save(name);
      this.setState({ name: "" });
    }
  };

  render() {
    const { open, close, handleDelete } = this.props;
    const { name, error } = this.state;
    return (
      <Modal
        open={open}
        close={close}
        onEnter={this.updateState}
        title="Edit"
        maxWidth="xs"
        content={
          <div>
            <TextField
              autoFocus
              error={error}
              margin="dense"
              id="name"
              label="Name"
              value={name}
              onChange={this.handleTextChange}
              onKeyDown={this.handleKeyDown}
              fullWidth
            />
            {!!error && (
              <FormHelperText style={{ color: "#f44336" }}>
                Please enter a name
              </FormHelperText>
            )}
          </div>
        }
        actions={
          <DialogActions>
            <Button onClick={close}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={this.save} color="primary" disabled={error}>
              Save
            </Button>
          </DialogActions>
        }
      />
    );
  }
}
