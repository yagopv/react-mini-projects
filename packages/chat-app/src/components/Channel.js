import React, { useState, useEffect } from 'react';
import { useFirebase } from '../shared/context/firebase-context';
import { useParams } from 'react-router-dom';
import {
  TextField,
  Box,
  Button,
  useTheme,
  makeStyles,
  List,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
  Divider,
  Typography,
} from '@material-ui/core';
import { getFriendlyDate } from '../shared/utils';
import { useMessages } from '../shared/hooks/useMessages';

export function Channel() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState('');
  let { channelName } = useParams();
  const { addMessage, messages, setMessages } = useMessages(channelName);

  return (
    <Box position="relative" height="100%">
      <List className={classes.list}>
        {messages &&
          messages.map(
            ({ id, message, createdAt, author: { displayName, avatar } }) => (
              <ListItem key={id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={displayName} src={avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${displayName} - ${getFriendlyDate(createdAt)}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {message}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            )
          )}
      </List>
      <Box
        position="absolute"
        bgcolor={theme.palette.grey[100]}
        bottom={theme.spacing(1)}
        padding={3}
        width="100%"
      >
        <Box display="flex">
          <TextField
            label="Message"
            multiline
            rows="4"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
          />
          <Box margin={2} marginTop="0" height="100%">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addMessage(channelName, value).then((docRef) => setValue(''));
              }}
            >
              Add message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
}));
