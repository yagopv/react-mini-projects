import React, { useState } from 'react';
import { useFirebase } from '../shared/context/firebase-context';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Box,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { slugify } from '../shared/utils';
import { useChannels } from '../shared/hooks/useChannels';

export function Toolbar({ onSearchChanged }) {
  const [open, setOpen] = useState(false);
  const { db, user } = useFirebase();
  const { addChannel } = useChannels();
  const history = useHistory();
  const [value, setValue] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddChannel = () => {
    addChannel(value)
      .then(function () {
        history.push(`/d/channel/${slugify(value)}`);
        handleClose();
      })
      .catch(function (error) {
        handleClose();
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Box display="flex" flexDirection="row">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(event) => onSearchChanged(event.target.value)}
      />
      <Fab
        color="primary"
        onClick={handleClickOpen}
        style={{ marginLeft: '10px' }}
      >
        <Add />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a channel enter the channel name in the input below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Channel name"
            type="text"
            fullWidth
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddChannel} color="primary">
            Add Channel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
