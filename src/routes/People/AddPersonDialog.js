import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddPersonDialog extends React.Component {
  state = {
    name: '',
  };

  handleClose = () => {
    const { close } = this.props;
    close();
  };

  handleNameChange = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  handleSave = () => {
    const { name } = this.state;
    const { save } = this.props;
    if (name.length > 2) {
      save(name);
      this.setState({
        name: '',
      });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSave();
    }
  };

  render() {
    const { open } = this.props;
    const { name } = this.state;
    return (
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>Add a person</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Name"
            value={name}
            onChange={this.handleNameChange}
            onKeyDown={this.handleKeyDown}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary" disabled={name.length < 3}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddPersonDialog;
