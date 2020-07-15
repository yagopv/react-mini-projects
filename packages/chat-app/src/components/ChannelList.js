import React, { useEffect, useState } from 'react';
import { useFirebase } from '../shared/context/firebase-context';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

export function ChannelList({ channels, onChannelSelected }) {
  return (
    <List component="nav">
      {channels.map((channel) => (
        <ListItem
          key={channel}
          button
          onClick={() => onChannelSelected(channel)}
        >
          <ListItemText>
            <Typography
              color="primary"
              variant="subtitle1"
            >{`# ${channel}`}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
