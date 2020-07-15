import React from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';
import { ChannelList } from './ChannelList';
import { Channel } from './Channel';
import { Toolbar } from './Toolbar';
import { Box, Hidden, Drawer, Button, Divider } from '@material-ui/core';
import { Header } from './Header';
import { useChannels } from '../shared/hooks/useChannels';
import { SearchChannelList } from '../components/SearchChannelList';

export function Dashboard() {
  const [isDrawerOpen, setIsDrawerOpened] = React.useState(false);
  const {
    myChannels,
    setSearchTerm,
    filteredChannels,
    addMeAsMember,
  } = useChannels();
  const history = useHistory();
  const { path } = useRouteMatch();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpened(open);
  };

  return (
    <>
      <Header onOpenMenu={toggleDrawer(true)} />
      <Box display="flex" flexDirection="row" paddingTop={8} height="100%">
        <Hidden xsDown>
          <Box component="aside" padding={2} bgcolor="grey.200">
            <Toolbar onSearchChanged={(term) => setSearchTerm(term)} />
            {filteredChannels.length > 0 && (
              <SearchChannelList
                channels={filteredChannels}
                myChannels={myChannels}
                onChannelSelected={(channel) => {
                  addMeAsMember(channel);
                  history.push(`/d/channels/${channel}`);
                }}
              />
            )}
            <ChannelList
              channels={myChannels}
              onChannelSelected={(channel) =>
                history.push(`/d/channels/${channel}`)
              }
            />
          </Box>
        </Hidden>
        <Hidden smUp>
          <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <Box component="aside" padding={2} bgcolor="grey.200">
              <Toolbar />
              <ChannelList />
            </Box>
          </Drawer>
        </Hidden>
        <Box component="main" flex="1">
          <Route path={`${path}/channels/:channelName`}>
            <Channel />
          </Route>
        </Box>
      </Box>
    </>
  );
}
