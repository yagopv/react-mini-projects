import React, { useEffect, useState, useMemo } from 'react';
import { useFirebase } from '../shared/context/firebase-context';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Typography,
} from '@material-ui/core';

export function SearchChannelList({ channels, myChannels, onChannelSelected }) {
  const displayChannels = useMemo(
    () => channels.filter((c) => !myChannels.includes(c)),
    [channels]
  );

  return (
    <List component="nav">
      {displayChannels.map((channel) => (
        <ListItem
          key={channel}
          button
          onClick={() => onChannelSelected(channel)}
        >
          <ListItemText>
            <Typography color="secondary">
              {`# ${channel}`}
              <Chip variant="outlined" size="small" label="Not a member" />
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
